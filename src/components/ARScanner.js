import React, { useCallback, useEffect, useRef, useState } from 'react';
import { listActivePuzzles } from '../services/puzzleService';
import { sortPlaybackSources } from '../utils/arUtils';

const PROCESS_INTERVAL_MS = 140;
const API_TIMEOUT_MS = 3000;
const OPENCV_WAIT_TIMEOUT_MS = 20000;
const MAX_CAMERA_SIDE = 720;
const MAX_REFERENCE_SIDE = 520;

const LOCAL_FALLBACK_PUZZLE = {
  id: 'local-convex-lens',
  name: 'Convex Lens Puzzle',
  description: 'Built-in puzzle demo',
  markerId: 'convex-lens-001',
  puzzleImageUrl: '/images/convex-lens.jpeg',
  isActive: true,
  playbackSources: [{ type: 'mp4', url: '/videos/convex-lens.mp4', priority: 10 }],
};

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Unable to load reference puzzle image.'));
    image.src = url;
  });
}

function waitForOpenCvRuntime(timeoutMs = OPENCV_WAIT_TIMEOUT_MS) {
  return new Promise((resolve, reject) => {
    let finished = false;
    const timeoutId = window.setTimeout(() => {
      if (!finished) {
        finished = true;
        reject(new Error('OpenCV runtime did not load. Refresh and retry.'));
      }
    }, timeoutMs);

    const complete = () => {
      if (finished) {
        return;
      }

      finished = true;
      window.clearTimeout(timeoutId);
      resolve(window.cv);
    };

    const checkRuntime = () => {
      if (window.cv && window.cv.Mat) {
        complete();
      }
    };

    if (window.cv && !window.cv.Mat) {
      window.cv.onRuntimeInitialized = complete;
    }

    checkRuntime();

    const pollId = window.setInterval(() => {
      if (finished) {
        window.clearInterval(pollId);
        return;
      }

      if (window.cv && !window.cv.Mat) {
        window.cv.onRuntimeInitialized = complete;
      }

      checkRuntime();
    }, 100);
  });
}

function computeScaledSize(width, height, maxSide) {
  const longestSide = Math.max(width, height);
  if (!longestSide || longestSide <= maxSide) {
    return { width: Math.round(width), height: Math.round(height) };
  }

  const scale = maxSide / longestSide;
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}

function pickPlayableSource(puzzle) {
  const sources = sortPlaybackSources(puzzle.playbackSources || []);
  return sources.find((source) => source.type !== 'youtube') || null;
}

function ARScanner() {
  const cameraRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  const processingCanvasRef = useRef(null);
  const sourceVideoRef = useRef(null);
  const sourceFrameCanvasRef = useRef(null);

  const animationRef = useRef(0);
  const lastProcessAtRef = useRef(0);
  const streamRef = useRef(null);
  const cvResourcesRef = useRef(null);
  const statusRef = useRef('Preparing scanner...');

  const [statusText, setStatusText] = useState('Preparing scanner...');
  const [cameraError, setCameraError] = useState('');
  const [loading, setLoading] = useState(true);
  const [puzzleDetected, setPuzzleDetected] = useState(false);
  const [initNonce, setInitNonce] = useState(0);

  const setStatus = useCallback((nextText) => {
    if (statusRef.current !== nextText) {
      statusRef.current = nextText;
      setStatusText(nextText);
    }
  }, []);

  const clearOverlay = useCallback(() => {
    const canvas = overlayCanvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  const stopLoop = useCallback(() => {
    if (animationRef.current) {
      window.cancelAnimationFrame(animationRef.current);
      animationRef.current = 0;
    }
  }, []);

  const stopStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (cameraRef.current) {
      cameraRef.current.pause();
      cameraRef.current.srcObject = null;
    }
  }, []);

  const disposeCvResources = useCallback(() => {
    const resources = cvResourcesRef.current;
    if (!resources) {
      return;
    }

    const { refGray, refKeypoints, refDescriptors, orb, matcher, emptyMask } = resources;
    if (refGray) refGray.delete();
    if (refKeypoints) refKeypoints.delete();
    if (refDescriptors) refDescriptors.delete();
    if (orb) orb.delete();
    if (matcher) matcher.delete();
    if (emptyMask) emptyMask.delete();

    cvResourcesRef.current = null;
  }, []);

  const fetchPuzzleConfig = useCallback(async () => {
    try {
      const response = await Promise.race([
        listActivePuzzles(),
        new Promise((_, reject) => {
          window.setTimeout(() => reject(new Error('Puzzle API timeout')), API_TIMEOUT_MS);
        }),
      ]);

      const active = Array.isArray(response?.puzzles) ? response.puzzles : [];
      if (active.length > 0) {
        return active[0];
      }
    } catch (error) {
      // Fall back below.
    }

    return LOCAL_FALLBACK_PUZZLE;
  }, []);

  const prepareReference = useCallback(async (cv, imageUrl) => {
    const referenceImage = await loadImage(imageUrl);
    const referenceSize = computeScaledSize(
      referenceImage.naturalWidth || referenceImage.width,
      referenceImage.naturalHeight || referenceImage.height,
      MAX_REFERENCE_SIDE
    );

    const referenceCanvas = document.createElement('canvas');
    referenceCanvas.width = referenceSize.width;
    referenceCanvas.height = referenceSize.height;
    const referenceContext = referenceCanvas.getContext('2d');
    referenceContext.drawImage(referenceImage, 0, 0, referenceCanvas.width, referenceCanvas.height);

    const refRgba = cv.imread(referenceCanvas);
    const refGray = new cv.Mat();
    cv.cvtColor(refRgba, refGray, cv.COLOR_RGBA2GRAY);

    const orb = new cv.ORB(900);
    const refKeypoints = new cv.KeyPointVector();
    const refDescriptors = new cv.Mat();
    const emptyMask = new cv.Mat();

    orb.detectAndCompute(refGray, emptyMask, refKeypoints, refDescriptors);

    refRgba.delete();

    if (refDescriptors.empty() || refKeypoints.size() < 20) {
      refGray.delete();
      refKeypoints.delete();
      refDescriptors.delete();
      orb.delete();
      emptyMask.delete();
      throw new Error('Reference image has too few detectable features.');
    }

    const matcher = new cv.BFMatcher(cv.NORM_HAMMING, false);

    cvResourcesRef.current = {
      cv,
      orb,
      matcher,
      emptyMask,
      refGray,
      refKeypoints,
      refDescriptors,
      refWidth: referenceCanvas.width,
      refHeight: referenceCanvas.height,
      frameWidth: 0,
      frameHeight: 0,
      missStreak: 0,
    };
  }, []);

  const startCamera = useCallback(async () => {
    const camera = cameraRef.current;
    if (!camera) {
      throw new Error('Camera preview element is unavailable.');
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: 'environment' },
      },
      audio: false,
    });

    streamRef.current = stream;
    camera.srcObject = stream;
    camera.setAttribute('playsinline', 'true');
    camera.muted = true;

    await camera.play();

    const frameSize = computeScaledSize(camera.videoWidth || 1280, camera.videoHeight || 720, MAX_CAMERA_SIDE);
    const processingCanvas = processingCanvasRef.current;
    const overlayCanvas = overlayCanvasRef.current;

    if (!processingCanvas || !overlayCanvas) {
      throw new Error('Canvas layers are unavailable.');
    }

    processingCanvas.width = frameSize.width;
    processingCanvas.height = frameSize.height;
    overlayCanvas.width = frameSize.width;
    overlayCanvas.height = frameSize.height;

    if (cvResourcesRef.current) {
      cvResourcesRef.current.frameWidth = frameSize.width;
      cvResourcesRef.current.frameHeight = frameSize.height;
    }
  }, []);

  const renderWarpedVideo = useCallback((homography) => {
    const resources = cvResourcesRef.current;
    const sourceVideo = sourceVideoRef.current;
    const sourceFrameCanvas = sourceFrameCanvasRef.current;
    const overlayCanvas = overlayCanvasRef.current;

    if (!resources || !sourceVideo || !sourceFrameCanvas || !overlayCanvas) {
      return false;
    }

    if (sourceVideo.readyState < 2) {
      return false;
    }

    sourceVideo.muted = true;
    sourceVideo.loop = true;
    sourceVideo.playsInline = true;
    sourceVideo.setAttribute('playsinline', 'true');
    if (sourceVideo.paused) {
      sourceVideo.play().catch(() => {});
    }

    sourceFrameCanvas.width = resources.refWidth;
    sourceFrameCanvas.height = resources.refHeight;
    const sourceContext = sourceFrameCanvas.getContext('2d');
    sourceContext.drawImage(sourceVideo, 0, 0, sourceFrameCanvas.width, sourceFrameCanvas.height);

    const { cv } = resources;
    const sourceMat = cv.imread(sourceFrameCanvas);
    const warped = new cv.Mat.zeros(resources.frameHeight, resources.frameWidth, cv.CV_8UC4);

    cv.warpPerspective(
      sourceMat,
      warped,
      homography,
      new cv.Size(resources.frameWidth, resources.frameHeight),
      cv.INTER_LINEAR,
      cv.BORDER_CONSTANT,
      new cv.Scalar(0, 0, 0, 0)
    );

    cv.imshow(overlayCanvas, warped);

    sourceMat.delete();
    warped.delete();
    return true;
  }, []);

  const processFrame = useCallback(() => {
    const resources = cvResourcesRef.current;
    const camera = cameraRef.current;
    const processingCanvas = processingCanvasRef.current;
    if (!resources || !camera || !processingCanvas || camera.readyState < 2) {
      return;
    }

    const processingContext = processingCanvas.getContext('2d', { willReadFrequently: true });
    processingContext.drawImage(camera, 0, 0, processingCanvas.width, processingCanvas.height);

    const { cv, orb, matcher, refKeypoints, refDescriptors, emptyMask } = resources;

    let frameRgba = null;
    let frameGray = null;
    let frameKeypoints = null;
    let frameDescriptors = null;
    let matches = null;
    let srcPoints = null;
    let dstPoints = null;
    let inlierMask = null;
    let homography = null;

    try {
      frameRgba = cv.imread(processingCanvas);
      frameGray = new cv.Mat();
      cv.cvtColor(frameRgba, frameGray, cv.COLOR_RGBA2GRAY);

      frameKeypoints = new cv.KeyPointVector();
      frameDescriptors = new cv.Mat();
      orb.detectAndCompute(frameGray, emptyMask, frameKeypoints, frameDescriptors);

      let detected = false;

      if (!frameDescriptors.empty()) {
        matches = new cv.DMatchVectorVector();
        matcher.knnMatch(refDescriptors, frameDescriptors, matches, 2);

        const srcBuffer = [];
        const dstBuffer = [];

        for (let index = 0; index < matches.size(); index += 1) {
          const pair = matches.get(index);
          if (pair.size() < 2) {
            continue;
          }

          const first = pair.get(0);
          const second = pair.get(1);

          if (first.distance < 0.75 * second.distance) {
            const srcPoint = refKeypoints.get(first.queryIdx).pt;
            const dstPoint = frameKeypoints.get(first.trainIdx).pt;

            srcBuffer.push(srcPoint.x, srcPoint.y);
            dstBuffer.push(dstPoint.x, dstPoint.y);
          }
        }

        const pointCount = srcBuffer.length / 2;
        if (pointCount >= 18) {
          srcPoints = cv.matFromArray(pointCount, 1, cv.CV_32FC2, srcBuffer);
          dstPoints = cv.matFromArray(pointCount, 1, cv.CV_32FC2, dstBuffer);
          inlierMask = new cv.Mat();
          homography = cv.findHomography(srcPoints, dstPoints, cv.RANSAC, 5, inlierMask);

          if (!homography.empty() && cv.countNonZero(inlierMask) >= 14) {
            detected = renderWarpedVideo(homography);
          }
        }
      }

      if (detected) {
        resources.missStreak = 0;
        if (!puzzleDetected) {
          setPuzzleDetected(true);
          setStatus('Puzzle detected. Video is playing.');
        }
      } else {
        resources.missStreak += 1;
        if (resources.missStreak > 2) {
          clearOverlay();
          if (puzzleDetected) {
            setPuzzleDetected(false);
            setStatus('Point camera at the puzzle image.');
          }
        }
      }
    } catch (error) {
      // Ignore per-frame processing errors and continue scanning.
    } finally {
      if (frameRgba) frameRgba.delete();
      if (frameGray) frameGray.delete();
      if (frameKeypoints) frameKeypoints.delete();
      if (frameDescriptors) frameDescriptors.delete();
      if (matches) matches.delete();
      if (srcPoints) srcPoints.delete();
      if (dstPoints) dstPoints.delete();
      if (inlierMask) inlierMask.delete();
      if (homography) homography.delete();
    }
  }, [clearOverlay, puzzleDetected, renderWarpedVideo, setStatus]);

  const startLoop = useCallback(() => {
    stopLoop();
    lastProcessAtRef.current = 0;

    const tick = (timestamp) => {
      if (timestamp - lastProcessAtRef.current >= PROCESS_INTERVAL_MS) {
        lastProcessAtRef.current = timestamp;
        processFrame();
      }

      animationRef.current = window.requestAnimationFrame(tick);
    };

    animationRef.current = window.requestAnimationFrame(tick);
  }, [processFrame, stopLoop]);

  useEffect(() => {
    let canceled = false;
    const mountedSourceVideo = sourceVideoRef.current;

    const initScanner = async () => {
      try {
        setLoading(true);
        setCameraError('');
        setPuzzleDetected(false);
        clearOverlay();
        setStatus('Loading puzzle...');

        const puzzle = await fetchPuzzleConfig();
        const source = pickPlayableSource(puzzle);

        if (!source) {
          throw new Error('No playable video source found for this puzzle.');
        }

        setStatus('Loading scanner engine...');
        const cv = await waitForOpenCvRuntime();
        if (canceled) return;

        setStatus('Preparing puzzle reference...');
        disposeCvResources();
        await prepareReference(cv, puzzle.puzzleImageUrl || LOCAL_FALLBACK_PUZZLE.puzzleImageUrl);
        if (canceled) return;

        const sourceVideo = sourceVideoRef.current;
        if (sourceVideo) {
          sourceVideo.src = source.url;
          sourceVideo.crossOrigin = 'anonymous';
          sourceVideo.preload = 'auto';
          sourceVideo.muted = true;
          sourceVideo.loop = true;
          sourceVideo.playsInline = true;
          sourceVideo.setAttribute('playsinline', 'true');
          sourceVideo.load();
        }

        setStatus('Starting camera...');
        await startCamera();
        if (canceled) return;

        setStatus('Point camera at the puzzle image.');
        setLoading(false);
        startLoop();
      } catch (error) {
        if (!canceled) {
          setLoading(false);
          setCameraError(error.message || 'Failed to initialize scanner.');
          setStatus('Scanner initialization failed.');
        }
      }
    };

    initScanner();

    return () => {
      canceled = true;
      stopLoop();
      stopStream();
      clearOverlay();
      disposeCvResources();

      if (mountedSourceVideo) {
        mountedSourceVideo.pause();
        mountedSourceVideo.removeAttribute('src');
        mountedSourceVideo.load();
      }
    };
  }, [
    initNonce,
    clearOverlay,
    disposeCvResources,
    fetchPuzzleConfig,
    prepareReference,
    setStatus,
    startCamera,
    startLoop,
    stopLoop,
    stopStream,
  ]);

  const onRescan = useCallback(() => {
    setPuzzleDetected(false);
    clearOverlay();
    setStatus('Point camera at the puzzle image.');
  }, [clearOverlay, setStatus]);

  return (
    <section className="scanner-page">
      <div className="scanner-panel card">
        <header className="scanner-header">
          <div>
            <h1>Puzzle Scanner</h1>
            <p>Point camera at the puzzle image and the video will play automatically.</p>
          </div>

          <div className="scanner-toolbar">
            <button type="button" className="btn btn-primary" onClick={onRescan}>
              Rescan
            </button>
          </div>
        </header>

        <p className="status-detail">{statusText}</p>

        <div className="stage-wrap">
          <video ref={cameraRef} className="camera-preview ready" playsInline muted autoPlay />
          <canvas ref={overlayCanvasRef} className="opencv-overlay" />

          {loading && (
            <div className="stage-loading">
              <h3>Preparing Scanner</h3>
              <p>Getting camera and puzzle tracker ready...</p>
            </div>
          )}

          {!loading && !cameraError && !puzzleDetected && (
            <div className="scan-overlay">
              <div className="scan-frame">
                <p>Point camera at your puzzle</p>
                <small>Keep full image in frame with good lighting</small>
              </div>
            </div>
          )}

          {cameraError && (
            <div className="stage-error">
              <h3>Scanner Error</h3>
              <p>{cameraError}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setInitNonce((current) => current + 1);
                }}
              >
                Retry
              </button>
            </div>
          )}
        </div>

        <canvas ref={processingCanvasRef} style={{ display: 'none' }} />
        <canvas ref={sourceFrameCanvasRef} style={{ display: 'none' }} />
        <video ref={sourceVideoRef} style={{ display: 'none' }} muted playsInline loop preload="auto" />
      </div>
    </section>
  );
}

export default ARScanner;
