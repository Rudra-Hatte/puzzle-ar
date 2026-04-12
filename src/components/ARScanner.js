import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { listActivePuzzles } from '../services/puzzleService';
import { sortPlaybackSources } from '../utils/arUtils';

const VIDEO_ASSET_ID = 'mindar-overlay-video';
const DIRECT_SOURCE_TIMEOUT_MS = 9000;
const TARGET_CACHE_PREFIX = 'mindar-target-cache-v1:';
const MAX_TARGET_IMAGE_SIDE = 640;
const PUZZLE_API_TIMEOUT_MS = 3500;
const LOCAL_FALLBACK_PUZZLE = {
  id: 'local-convex-lens',
  name: 'Convex Lens Puzzle',
  description: 'Built-in puzzle demo',
  markerId: 'convex-lens-001',
  puzzleImageUrl: '/images/convex-lens.jpeg',
  isActive: true,
  playbackSources: [{ type: 'mp4', url: '/videos/convex-lens.mp4', priority: 10 }],
};

function toUint8Array(input) {
  if (input instanceof Uint8Array) {
    return input;
  }

  if (input instanceof ArrayBuffer) {
    return new Uint8Array(input);
  }

  if (Array.isArray(input)) {
    return Uint8Array.from(input);
  }

  throw new Error('Unsupported compiled target format');
}

function uint8ArrayToBase64(bytes) {
  let binary = '';
  const chunkSize = 0x8000;

  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode(...chunk);
  }

  return window.btoa(binary);
}

function base64ToUint8Array(base64) {
  const binary = window.atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

function normalizeImageForCompilation(imageElement) {
  const naturalWidth = imageElement.naturalWidth || imageElement.width;
  const naturalHeight = imageElement.naturalHeight || imageElement.height;
  const longestSide = Math.max(naturalWidth, naturalHeight);

  if (!longestSide || longestSide <= MAX_TARGET_IMAGE_SIDE) {
    return imageElement;
  }

  const scale = MAX_TARGET_IMAGE_SIDE / longestSide;
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(naturalHeight * scale));

  const context = canvas.getContext('2d');
  if (!context) {
    return imageElement;
  }

  context.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
  return canvas;
}

function ARScanner() {
  const sceneRef = useRef(null);
  const targetRef = useRef(null);
  const overlayVideoRef = useRef(null);
  const cameraPreviewRef = useRef(null);
  const compiledBlobUrlRef = useRef('');

  const [runtimeReady, setRuntimeReady] = useState(false);
  const [loadingPuzzles, setLoadingPuzzles] = useState(true);
  const [puzzles, setPuzzles] = useState([]);
  const [selectedPuzzleId, setSelectedPuzzleId] = useState('');
  const [rebuildNonce, setRebuildNonce] = useState(0);

  const [compilingTarget, setCompilingTarget] = useState(false);
  const [compileProgress, setCompileProgress] = useState(0);
  const [compiledTargetUrl, setCompiledTargetUrl] = useState('');

  const [cameraReady, setCameraReady] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [puzzleDetected, setPuzzleDetected] = useState(false);
  const [statusText, setStatusText] = useState('Preparing scanner...');
  const [cameraError, setCameraError] = useState('');
  const [cameraPreviewReady, setCameraPreviewReady] = useState(false);

  const [videoState, setVideoState] = useState('idle');
  const [youtubeFallbackUrl, setYoutubeFallbackUrl] = useState('');

  const selectedPuzzle = useMemo(
    () => puzzles.find((puzzle) => String(puzzle.id) === String(selectedPuzzleId)) || null,
    [puzzles, selectedPuzzleId]
  );

  const stopOverlayVideo = useCallback(() => {
    const video = overlayVideoRef.current;
    if (!video) {
      return;
    }

    video.pause();
    video.removeAttribute('src');
    video.load();
  }, []);

  const revokeCompiledUrl = useCallback(() => {
    if (compiledBlobUrlRef.current) {
      URL.revokeObjectURL(compiledBlobUrlRef.current);
      compiledBlobUrlRef.current = '';
    }
  }, []);

  const loadImageElement = useCallback((url) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Unable to load puzzle image for AR target compilation'));

      image.src = url;
    });
  }, []);

  const compileTargetFromImage = useCallback(
    async (imageUrl) => {
      if (!window.MINDAR?.IMAGE?.Compiler) {
        throw new Error('MindAR compiler runtime not available.');
      }

      const cacheKey = `${TARGET_CACHE_PREFIX}${imageUrl}`;
      const cachedTargetBase64 = window.localStorage.getItem(cacheKey);

      if (cachedTargetBase64) {
        try {
          const cachedBytes = base64ToUint8Array(cachedTargetBase64);
          const cachedBlob = new Blob([cachedBytes], { type: 'application/octet-stream' });
          setCompileProgress(100);
          return URL.createObjectURL(cachedBlob);
        } catch (error) {
          window.localStorage.removeItem(cacheKey);
        }
      }

      const imageElement = await loadImageElement(imageUrl);
      const compilationInput = normalizeImageForCompilation(imageElement);
      const compiler = new window.MINDAR.IMAGE.Compiler();

      await compiler.compileImageTargets([compilationInput], (progress) => {
        const normalizedProgress = Number(progress) <= 1 ? Number(progress) * 100 : Number(progress);
        setCompileProgress(Math.max(0, Math.min(100, Math.round(normalizedProgress))));
      });

      const compiled = compiler.exportData();
      const compiledBytes = toUint8Array(compiled);
      const blob = new Blob([compiledBytes], { type: 'application/octet-stream' });

      try {
        const base64 = uint8ArrayToBase64(compiledBytes);
        window.localStorage.setItem(cacheKey, base64);
      } catch (error) {
        // Ignore cache write failures (quota/private mode) and proceed normally.
      }

      return URL.createObjectURL(blob);
    },
    [loadImageElement]
  );

  const playFromSources = useCallback(
    (sources, startIndex = 0) => {
      if (!Array.isArray(sources) || startIndex >= sources.length) {
        setVideoState('error');
        setStatusText('Video could not be played.');
        return;
      }

      const source = sources[startIndex];

      if (source.type === 'youtube') {
        setYoutubeFallbackUrl(source.url);
        playFromSources(sources, startIndex + 1);
        return;
      }

      const video = overlayVideoRef.current;
      if (!video) {
        setVideoState('error');
        setStatusText('Video layer is unavailable.');
        return;
      }

      setVideoState('loading');

      let resolved = false;
      let timeoutId = null;

      const tryPlay = () => {
        if (resolved) {
          return;
        }

        video.play().then(onSuccess).catch(onFailure);
      };

      const clearHandlers = () => {
        video.oncanplay = null;
        video.oncanplaythrough = null;
        video.onloadeddata = null;
        video.onloadedmetadata = null;
        video.onplaying = null;
        video.onerror = null;
        if (timeoutId) {
          window.clearTimeout(timeoutId);
        }
      };

      const onFailure = () => {
        if (resolved) {
          return;
        }

        resolved = true;
        clearHandlers();
        playFromSources(sources, startIndex + 1);
      };

      const onSuccess = () => {
        if (resolved) {
          return;
        }

        resolved = true;
        clearHandlers();
        setVideoState('playing');
        setStatusText('Puzzle detected. Video is playing.');
      };

      video.pause();
      video.removeAttribute('src');
      video.load();

      video.crossOrigin = 'anonymous';
      video.preload = 'auto';
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('muted', 'true');

      video.onloadedmetadata = tryPlay;
      video.onloadeddata = tryPlay;
      video.oncanplay = tryPlay;
      video.oncanplaythrough = tryPlay;
      video.onplaying = onSuccess;
      video.onerror = onFailure;

      timeoutId = window.setTimeout(onFailure, DIRECT_SOURCE_TIMEOUT_MS);

      video.src = source.url;
      video.load();
    },
    []
  );

  const loadPuzzles = useCallback(async () => {
    setLoadingPuzzles(true);
    setCameraError('');
    setPuzzles((current) => (current.length > 0 ? current : [LOCAL_FALLBACK_PUZZLE]));
    setSelectedPuzzleId((current) => current || String(LOCAL_FALLBACK_PUZZLE.id));
    setStatusText('Preparing puzzle target...');

    try {
      const response = await Promise.race([
        listActivePuzzles(),
        new Promise((_, reject) => {
          window.setTimeout(() => reject(new Error('Puzzle API timeout')), PUZZLE_API_TIMEOUT_MS);
        }),
      ]);
      const active = Array.isArray(response?.puzzles) ? response.puzzles : [];

      if (active.length === 0) {
        throw new Error('No active puzzle found. Add and activate one puzzle from admin.');
      }

      setPuzzles(active);
      setSelectedPuzzleId(String(active[0].id));
      setStatusText('Preparing puzzle target...');
    } catch (error) {
      // Keep local fallback when API is slow/unavailable.
      setCameraError('');
      setStatusText('Using local puzzle data. Point camera at the puzzle image.');
    } finally {
      setLoadingPuzzles(false);
    }
  }, []);

  const resetScanner = useCallback(() => {
    stopOverlayVideo();
    setPuzzleDetected(false);
    setVideoState('idle');

    if (cameraReady) {
      setStatusText('Point your camera at the puzzle image.');
      setIsScanning(true);
      return;
    }

    setStatusText('Preparing scanner...');
  }, [cameraReady, stopOverlayVideo]);

  useEffect(() => {
    let retries = 0;
    const timer = window.setInterval(() => {
      if (window.AFRAME && window.MINDAR?.IMAGE?.Compiler) {
        setRuntimeReady(true);
        setStatusText('Loading puzzle...');
        window.clearInterval(timer);
        return;
      }

      retries += 1;
      if (retries > 40) {
        setCameraError('Could not load scanner runtime. Refresh and try again.');
        window.clearInterval(timer);
      }
    }, 200);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (!runtimeReady) {
      return;
    }

    loadPuzzles();
  }, [runtimeReady, loadPuzzles]);

  useEffect(() => {
    if (!runtimeReady || !navigator?.mediaDevices?.getUserMedia) {
      return;
    }

    let canceled = false;

    const requestCameraAccess = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
          audio: false,
        });

        stream.getTracks().forEach((track) => track.stop());

        if (!canceled) {
          setStatusText((current) =>
            current === 'Preparing scanner...' ? 'Loading puzzle...' : current
          );
        }
      } catch (error) {
        if (!canceled) {
          setCameraError('Camera permission is required. Please allow camera and tap Rescan.');
        }
      }
    };

    requestCameraAccess();

    return () => {
      canceled = true;
    };
  }, [runtimeReady]);

  useEffect(() => {
    if (!runtimeReady || !selectedPuzzle?.puzzleImageUrl) {
      return;
    }

    let canceled = false;

    const buildTarget = async () => {
      setCompilingTarget(true);
      setCompileProgress(0);
      setCameraReady(false);
      setIsScanning(false);
      setPuzzleDetected(false);
      setVideoState('idle');
      setYoutubeFallbackUrl('');
      setCameraError('');
      setStatusText('Preparing camera...');

      try {
        const nextUrl = await compileTargetFromImage(selectedPuzzle.puzzleImageUrl);

        if (canceled) {
          URL.revokeObjectURL(nextUrl);
          return;
        }

        revokeCompiledUrl();
        compiledBlobUrlRef.current = nextUrl;
        setCompiledTargetUrl(nextUrl);
        setStatusText('Camera is starting...');
      } catch (error) {
        if (!canceled) {
          setCameraError(error.message || 'Could not prepare puzzle target.');
        }
      } finally {
        if (!canceled) {
          setCompilingTarget(false);
        }
      }
    };

    buildTarget();

    return () => {
      canceled = true;
    };
  }, [compileTargetFromImage, rebuildNonce, revokeCompiledUrl, runtimeReady, selectedPuzzle]);

  useEffect(() => {
    const scene = sceneRef.current;
    const target = targetRef.current;

    if (!scene || !target || !compiledTargetUrl || !selectedPuzzle) {
      return;
    }

    const onReady = () => {
      const cameraStreamVideo = Array.from(scene.querySelectorAll('video')).find(
        (videoElement) => videoElement !== overlayVideoRef.current && videoElement.srcObject
      );

      if (cameraStreamVideo && cameraPreviewRef.current) {
        cameraPreviewRef.current.srcObject = cameraStreamVideo.srcObject;
        setCameraPreviewReady(true);
        cameraPreviewRef.current
          .play()
          .then(() => {})
          .catch(() => {
            // Keep visible if stream is attached even when play() promise rejects.
          });
      }

      setCameraReady(true);
      setIsScanning(true);
      setStatusText('Camera ready. Point at the puzzle image.');
    };

    const onError = () => {
      setCameraError('Could not open camera. Allow camera permission and retry.');
      setStatusText('Camera failed to start.');
      setCameraPreviewReady(false);
    };

    const onFound = () => {
      const sortedSources = sortPlaybackSources(selectedPuzzle.playbackSources || []);

      setPuzzleDetected(true);
      setIsScanning(false);
      playFromSources(sortedSources, 0);
    };

    const onLost = () => {
      setPuzzleDetected(false);
      setIsScanning(true);
      setStatusText('Puzzle not in view. Point back at the image.');
      stopOverlayVideo();
      setVideoState('idle');
    };

    scene.addEventListener('arReady', onReady);
    scene.addEventListener('arError', onError);
    target.addEventListener('targetFound', onFound);
    target.addEventListener('targetLost', onLost);

    return () => {
      scene.removeEventListener('arReady', onReady);
      scene.removeEventListener('arError', onError);
      target.removeEventListener('targetFound', onFound);
      target.removeEventListener('targetLost', onLost);
    };
  }, [compiledTargetUrl, playFromSources, selectedPuzzle, stopOverlayVideo]);

  useEffect(() => {
    const mountedScene = sceneRef.current;
    const mountedPreviewVideo = cameraPreviewRef.current;

    return () => {
      stopOverlayVideo();
      setCameraPreviewReady(false);

      if (mountedPreviewVideo) {
        mountedPreviewVideo.pause();
        mountedPreviewVideo.srcObject = null;
      }

      const system = mountedScene?.systems?.['mindar-image-system'];
      if (system) {
        try {
          system.stop();
        } catch (error) {
          // Ignore stop failures during teardown.
        }
      }

      revokeCompiledUrl();
    };
  }, [revokeCompiledUrl, stopOverlayVideo]);

  return (
    <section className="scanner-page">
      <div className="scanner-panel card">
        <header className="scanner-header">
          <div>
            <h1>Puzzle Scanner</h1>
            <p>Point camera at the puzzle image and the video will play automatically.</p>
          </div>

          <div className="scanner-toolbar">
            <button type="button" className="btn btn-primary" onClick={resetScanner}>
              Rescan
            </button>
          </div>
        </header>

        <p className="status-detail">{statusText}</p>

        {compilingTarget && (
          <div className="compile-progress" aria-label="target compile progress">
            <div className="compile-progress-fill" style={{ width: `${compileProgress}%` }} />
          </div>
        )}

        <div className="stage-wrap">
          <video
            ref={cameraPreviewRef}
            className={`camera-preview ${cameraPreviewReady ? 'ready' : ''}`}
            playsInline
            muted
            autoPlay
          />

          {!runtimeReady || loadingPuzzles || compilingTarget || !compiledTargetUrl ? (
            <div className="stage-loading">
              <h3>Preparing Scanner</h3>
              <p>{compilingTarget ? `Preparing target ${compileProgress}%` : 'Getting camera ready...'}</p>
            </div>
          ) : (
            <>
              <a-scene
                key={`${selectedPuzzleId}-${compiledTargetUrl}`}
                ref={sceneRef}
                class="mindar-scene"
                mindar-image={`imageTargetSrc: ${compiledTargetUrl}; autoStart: true; uiLoading: no; uiScanning: no; uiError: no; maxTrack: 1; warmupTolerance: 5; missTolerance: 8;`}
                color-space="sRGB"
                renderer="alpha: true; precision: mediump; colorManagement: true; physicallyCorrectLights: true"
                vr-mode-ui="enabled: false"
                device-orientation-permission-ui="enabled: false"
                embedded
              >
                <a-assets timeout="30000">
                  <video
                    id={VIDEO_ASSET_ID}
                    ref={overlayVideoRef}
                    muted
                    playsInline
                    webkit-playsinline="true"
                    preload="auto"
                    autoPlay
                    loop
                    style={{ position: 'absolute', width: '1px', height: '1px', opacity: 0 }}
                  />
                </a-assets>
                <a-camera position="0 0 0" look-controls="enabled: false" />
                <a-entity ref={targetRef} mindar-image-target="targetIndex: 0">
                  <a-video
                    visible={videoState === 'playing'}
                    src={`#${VIDEO_ASSET_ID}`}
                    position="0 0 0"
                    width="1"
                    height="0.56"
                    material="shader: flat; transparent: true; opacity: 1;"
                  />
                </a-entity>
              </a-scene>

              {isScanning && !puzzleDetected && !cameraError && (
                <div className="scan-overlay">
                  <div className="scan-frame">
                    <p>Point camera at your puzzle</p>
                    <small>Keep full image in frame with good lighting</small>
                  </div>
                </div>
              )}
            </>
          )}

          {cameraError && (
            <div className="stage-error">
              <h3>Scanner Error</h3>
              <p>{cameraError}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setCameraError('');
                  setRebuildNonce((current) => current + 1);
                  loadPuzzles();
                }}
              >
                Retry
              </button>
            </div>
          )}
        </div>

        {videoState === 'error' && youtubeFallbackUrl && (
          <div className="fallback-note card">
            <p>
              Direct AR video source failed. You can open the YouTube fallback, but it will not be texture-anchored on the puzzle.
            </p>
            <button
              type="button"
              className="btn"
              onClick={() => {
                window.open(youtubeFallbackUrl, '_blank', 'noopener,noreferrer');
              }}
            >
              Open YouTube Fallback
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default ARScanner;
