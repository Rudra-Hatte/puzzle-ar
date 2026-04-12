import React, { useCallback, useEffect, useRef, useState } from 'react';

const PROCESS_INTERVAL_MS = 180;
const OPENCV_WAIT_TIMEOUT_MS = 9000;
const MAX_CAMERA_SIDE = 540;
const MAX_REFERENCE_SIDE = 460;
const DEBUG_UI_INTERVAL_MS = 250;
const OPENCV_SCRIPT_URLS = [
  'https://docs.opencv.org/4.9.0/opencv.js',
  'https://docs.opencv.org/4.x/opencv.js',
  'https://cdn.jsdelivr.net/npm/@techstark/opencv-js@4.9.0/dist/opencv.js',
  'https://unpkg.com/@techstark/opencv-js@4.9.0/dist/opencv.js',
];
const MIN_GOOD_MATCHES = 16;
const MIN_INLIERS = 12;

const PROTOTYPE_PUZZLE = {
  id: 'prototype-convex-lens',
  name: 'Convex Lens Puzzle',
  description: 'Single puzzle prototype mode',
  markerId: 'convex-lens-001',
  puzzleImageUrl: '/images/convex-lens.jpeg',
  videoUrl: '/videos/convex-lens.mp4',
};

function createInitialDebugInfo() {
  return {
    puzzleName: '-',
    sourceUrl: '-',
    cvReady: false,
    frameWidth: 0,
    frameHeight: 0,
    referenceFeatures: 0,
    frameFeatures: 0,
    goodMatches: 0,
    inliers: 0,
    homographyReady: false,
    missStreak: 0,
    detected: false,
    processMs: 0,
    fpsEstimate: 0,
    note: 'Initializing...',
  };
}

function nowMs() {
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    return performance.now();
  }

  return Date.now();
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Unable to load reference puzzle image.'));
    image.src = url;
  });
}

function loadScript(url, timeoutMs) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = url;

    const timeoutId = window.setTimeout(() => {
      cleanup();
      reject(new Error(`Script load timeout: ${url}`));
    }, timeoutMs);

    const cleanup = () => {
      window.clearTimeout(timeoutId);
      script.onload = null;
      script.onerror = null;
    };

    script.onload = () => {
      cleanup();
      resolve();
    };

    script.onerror = () => {
      cleanup();
      script.remove();
      reject(new Error(`Script load failed: ${url}`));
    };

    document.head.appendChild(script);
  });
}

async function ensureOpenCvScriptLoaded(timeoutMs = OPENCV_WAIT_TIMEOUT_MS) {
  if (window.cv) {
    return;
  }

  const existingScript = Array.from(document.scripts).find((script) =>
    /opencv\.js/i.test(script.src || '')
  );

  if (existingScript) {
    return;
  }

  let lastError = null;
  for (const url of OPENCV_SCRIPT_URLS) {
    try {
      await loadScript(url, timeoutMs);
      return;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('Unable to load OpenCV script.');
}

function waitForOpenCvRuntime(timeoutMs = OPENCV_WAIT_TIMEOUT_MS) {
  return ensureOpenCvScriptLoaded(timeoutMs).then(
    () =>
      new Promise((resolve, reject) => {
    let finished = false;
    const timeoutId = window.setTimeout(() => {
      if (!finished) {
        finished = true;
          reject(new Error('OpenCV runtime did not load. Disable Brave shields and retry.'));
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
    })
  );
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

function ARScanner() {
  const cameraRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  const processingCanvasRef = useRef(null);
  const sourceVideoRef = useRef(null);
  const sourceFrameCanvasRef = useRef(null);

  const animationRef = useRef(0);
  const lastProcessAtRef = useRef(0);
  const lastFrameAtRef = useRef(0);
  const streamRef = useRef(null);
  const cvResourcesRef = useRef(null);
  const statusRef = useRef('Tap Start Scanner to begin.');
  const debugInfoRef = useRef(createInitialDebugInfo());
  const lastDebugUpdateAtRef = useRef(0);

  const [statusText, setStatusText] = useState('Tap Start Scanner to begin.');
  const [cameraError, setCameraError] = useState('');
  const [loading, setLoading] = useState(false);
  const [puzzleDetected, setPuzzleDetected] = useState(false);
  const [scannerStarted, setScannerStarted] = useState(false);
  const [initNonce, setInitNonce] = useState(0);
  const [debugVisible, setDebugVisible] = useState(false);
  const [debugInfo, setDebugInfo] = useState(createInitialDebugInfo);

  const updateDebug = useCallback((partial, force = false) => {
    const nextInfo = { ...debugInfoRef.current, ...partial };
    debugInfoRef.current = nextInfo;

    const currentTime = nowMs();
    if (force || currentTime - lastDebugUpdateAtRef.current >= DEBUG_UI_INTERVAL_MS) {
      lastDebugUpdateAtRef.current = currentTime;
      setDebugInfo(nextInfo);
    }
  }, []);

  const resetDebug = useCallback((partial = {}) => {
    const nextInfo = { ...createInitialDebugInfo(), ...partial };
    debugInfoRef.current = nextInfo;
    lastDebugUpdateAtRef.current = 0;
    lastFrameAtRef.current = 0;
    setDebugInfo(nextInfo);
  }, []);

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

    const orb = new cv.ORB(650);
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

    const processingCanvas = processingCanvasRef.current;

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
      frameWidth: processingCanvas?.width || 0,
      frameHeight: processingCanvas?.height || 0,
      missStreak: 0,
    };

    updateDebug(
      {
        referenceFeatures: refKeypoints.size(),
        note: 'Reference features extracted.',
      },
      true
    );
  }, [updateDebug]);

  const startCamera = useCallback(async () => {
    const camera = cameraRef.current;
    if (!camera) {
      throw new Error('Camera preview element is unavailable.');
    }

    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: 'environment' },
        },
        audio: false,
      });
    } catch (error) {
      stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    }

    streamRef.current = stream;
    camera.srcObject = stream;
    camera.setAttribute('playsinline', 'true');
    camera.muted = true;

    await camera.play().catch(() => {});

    if (camera.readyState < 2) {
      await new Promise((resolve, reject) => {
        const timeoutId = window.setTimeout(() => {
          cleanup();
          reject(new Error('Camera did not become ready. Please retry.'));
        }, 4500);

        const onReady = () => {
          cleanup();
          resolve();
        };

        const cleanup = () => {
          window.clearTimeout(timeoutId);
          camera.removeEventListener('loadeddata', onReady);
          camera.removeEventListener('canplay', onReady);
        };

        camera.addEventListener('loadeddata', onReady, { once: true });
        camera.addEventListener('canplay', onReady, { once: true });
      });
    }

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

    updateDebug(
      {
        frameWidth: frameSize.width,
        frameHeight: frameSize.height,
        note: 'Camera ready. Searching for puzzle...',
      },
      true
    );
  }, [updateDebug]);

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
    const frameStart = nowMs();
    const frameGap = lastFrameAtRef.current ? frameStart - lastFrameAtRef.current : 0;
    lastFrameAtRef.current = frameStart;

    let frameFeatureCount = 0;
    let goodMatchCount = 0;
    let inlierCount = 0;
    let homographyReady = false;
    let detected = false;

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
      frameFeatureCount = frameKeypoints.size();

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
        goodMatchCount = pointCount;
        if (pointCount >= MIN_GOOD_MATCHES) {
          srcPoints = cv.matFromArray(pointCount, 1, cv.CV_32FC2, srcBuffer);
          dstPoints = cv.matFromArray(pointCount, 1, cv.CV_32FC2, dstBuffer);
          inlierMask = new cv.Mat();
          homography = cv.findHomography(srcPoints, dstPoints, cv.RANSAC, 5, inlierMask);
          homographyReady = !homography.empty();

          if (!homography.empty()) {
            inlierCount = cv.countNonZero(inlierMask);
          }

          if (homographyReady && inlierCount >= MIN_INLIERS) {
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

      const processMs = nowMs() - frameStart;
      updateDebug(
        {
          frameFeatures: frameFeatureCount,
          goodMatches: goodMatchCount,
          inliers: inlierCount,
          missStreak: resources.missStreak,
          detected,
          processMs: Number(processMs.toFixed(1)),
          fpsEstimate: frameGap > 0 ? Math.round(1000 / Math.max(1, frameGap)) : 0,
          note: detected
            ? 'Locked on puzzle.'
            : goodMatchCount >= MIN_GOOD_MATCHES
              ? 'Matching features found. Adjust angle/lighting for lock.'
              : 'Searching for puzzle features...',
          cvReady: true,
          frameWidth: resources.frameWidth,
          frameHeight: resources.frameHeight,
          homographyReady,
        },
        false
      );
    } catch (error) {
      // Ignore per-frame processing errors and continue scanning.
      updateDebug(
        {
          note: 'Frame processing hiccup. Continuing scan...',
          detected: false,
        },
        false
      );
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
  }, [clearOverlay, puzzleDetected, renderWarpedVideo, setStatus, updateDebug]);

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
    if (!scannerStarted) {
      return undefined;
    }

    let canceled = false;
    const mountedSourceVideo = sourceVideoRef.current;

    const initScanner = async () => {
      try {
        setLoading(true);
        setCameraError('');
        setPuzzleDetected(false);
        resetDebug({ note: 'Starting camera...' });
        clearOverlay();
        setStatus('Starting camera...');

        updateDebug(
          {
            puzzleName: PROTOTYPE_PUZZLE.name,
            sourceUrl: PROTOTYPE_PUZZLE.videoUrl,
          },
          true
        );

        await startCamera();
        if (canceled) return;

        setLoading(false);
        setStatus('Camera ready. Loading scanner engine...');
        updateDebug({ note: 'Camera ready. Loading OpenCV...' }, true);

        setStatus('Loading scanner engine...');
        const cv = await waitForOpenCvRuntime();
        if (canceled) return;

        updateDebug({ cvReady: true, note: 'OpenCV ready. Building reference features...' }, true);

        setStatus('Preparing puzzle reference...');
        disposeCvResources();
        await prepareReference(cv, PROTOTYPE_PUZZLE.puzzleImageUrl);
        if (canceled) return;

        const sourceVideo = sourceVideoRef.current;
        if (sourceVideo) {
          sourceVideo.src = PROTOTYPE_PUZZLE.videoUrl;
          sourceVideo.preload = 'metadata';
          sourceVideo.muted = true;
          sourceVideo.loop = true;
          sourceVideo.playsInline = true;
          sourceVideo.setAttribute('playsinline', 'true');
          sourceVideo.load();
        }

        setStatus('Point camera at the puzzle image.');
        updateDebug({ note: 'Tracker ready. Point camera at the puzzle image.' }, true);
        startLoop();
      } catch (error) {
        if (!canceled) {
          setLoading(false);
          setCameraError(error.message || 'Failed to initialize scanner.');
          setStatus('Scanner initialization failed.');
          updateDebug({ note: error.message || 'Scanner initialization failed.' }, true);
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
    scannerStarted,
    initNonce,
    clearOverlay,
    disposeCvResources,
    prepareReference,
    resetDebug,
    setStatus,
    startCamera,
    startLoop,
    stopLoop,
    stopStream,
    updateDebug,
  ]);

  const onStartScanner = useCallback(() => {
    setCameraError('');
    setScannerStarted(true);
    setInitNonce((current) => current + 1);
    setStatus('Starting camera...');
    updateDebug({ note: 'Starting scanner...' }, true);
  }, [setStatus, updateDebug]);

  const onRescan = useCallback(() => {
    if (!scannerStarted) {
      return;
    }

    setPuzzleDetected(false);
    clearOverlay();
    setStatus('Point camera at the puzzle image.');
    updateDebug({ detected: false, missStreak: 0, note: 'Manual rescan triggered.' }, true);
  }, [clearOverlay, scannerStarted, setStatus, updateDebug]);

  return (
    <section className="scanner-page">
      <div className="scanner-panel card">
        <header className="scanner-header">
          <div>
            <h1>Puzzle Scanner</h1>
            <p>Point camera at the puzzle image and the video will play automatically.</p>
            <p className="hint-text">Prototype mode active: one puzzle is live now, multi-puzzle system is ready for next phase.</p>
          </div>

          <div className="scanner-toolbar">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onStartScanner}
            >
              {scannerStarted ? 'Restart Scanner' : 'Start Scanner'}
            </button>

            {scannerStarted && (
              <>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setDebugVisible((current) => !current);
                  }}
                >
                  {debugVisible ? 'Hide Debug' : 'Show Debug'}
                </button>
                <button type="button" className="btn btn-primary" onClick={onRescan}>
                  Rescan
                </button>
              </>
            )}
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

          {!scannerStarted && !loading && !cameraError && (
            <div className="stage-loading">
              <h3>Prototype Ready</h3>
              <p>Tap Start Scanner to launch the one-puzzle demo.</p>
            </div>
          )}

          {scannerStarted && !loading && !cameraError && !puzzleDetected && (
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
                  setScannerStarted(true);
                  setInitNonce((current) => current + 1);
                }}
              >
                Retry
              </button>
            </div>
          )}
        </div>

        {debugVisible && (
          <section className="debug-panel" aria-live="polite">
            <h3>OpenCV Debug</h3>
            <p className="debug-note">{debugInfo.note}</p>

            <div className="debug-grid">
              <div>
                <strong>Detected</strong>
                <span>{debugInfo.detected ? 'YES' : 'NO'}</span>
              </div>
              <div>
                <strong>OpenCV</strong>
                <span>{debugInfo.cvReady ? 'Ready' : 'Loading'}</span>
              </div>
              <div>
                <strong>Frame</strong>
                <span>
                  {debugInfo.frameWidth}x{debugInfo.frameHeight}
                </span>
              </div>
              <div>
                <strong>Reference Features</strong>
                <span>{debugInfo.referenceFeatures}</span>
              </div>
              <div>
                <strong>Frame Features</strong>
                <span>{debugInfo.frameFeatures}</span>
              </div>
              <div>
                <strong>Good Matches</strong>
                <span>{debugInfo.goodMatches}</span>
              </div>
              <div>
                <strong>Inliers</strong>
                <span>{debugInfo.inliers}</span>
              </div>
              <div>
                <strong>Homography</strong>
                <span>{debugInfo.homographyReady ? 'Ready' : 'No'}</span>
              </div>
              <div>
                <strong>Miss Streak</strong>
                <span>{debugInfo.missStreak}</span>
              </div>
              <div>
                <strong>Process</strong>
                <span>{debugInfo.processMs} ms</span>
              </div>
              <div>
                <strong>FPS Approx</strong>
                <span>{debugInfo.fpsEstimate}</span>
              </div>
              <div className="debug-wide">
                <strong>Puzzle</strong>
                <span>{debugInfo.puzzleName}</span>
              </div>
              <div className="debug-wide">
                <strong>Source</strong>
                <span className="debug-ellipsis" title={debugInfo.sourceUrl}>
                  {debugInfo.sourceUrl}
                </span>
              </div>
            </div>
          </section>
        )}

        <canvas ref={processingCanvasRef} style={{ display: 'none' }} />
        <canvas ref={sourceFrameCanvasRef} style={{ display: 'none' }} />
        <video ref={sourceVideoRef} style={{ display: 'none' }} muted playsInline loop preload="auto" />
      </div>
    </section>
  );
}

export default ARScanner;
