import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { listActivePuzzles } from '../services/puzzleService';
import { sortPlaybackSources } from '../utils/arUtils';

const VIDEO_ASSET_ID = 'mindar-overlay-video';
const DIRECT_SOURCE_TIMEOUT_MS = 4500;
const LOCAL_FALLBACK_PUZZLE = {
  id: 'local-convex-lens',
  name: 'Convex Lens Puzzle',
  description: 'Built-in puzzle demo',
  markerId: 'convex-lens-001',
  puzzleImageUrl: '/images/convex-lens.jpeg',
  isActive: true,
  playbackSources: [{ type: 'mp4', url: '/videos/convex-lens.mp4', priority: 10 }],
};

function ARScanner() {
  const sceneRef = useRef(null);
  const targetRef = useRef(null);
  const overlayVideoRef = useRef(null);
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

      const cacheBust = `${url}${url.includes('?') ? '&' : '?'}mindar=${Date.now()}`;
      image.src = cacheBust;
    });
  }, []);

  const compileTargetFromImage = useCallback(
    async (imageUrl) => {
      if (!window.MINDAR?.IMAGE?.Compiler) {
        throw new Error('MindAR compiler runtime not available.');
      }

      const imageElement = await loadImageElement(imageUrl);
      const compiler = new window.MINDAR.IMAGE.Compiler();

      await compiler.compileImageTargets([imageElement], (progress) => {
        const normalizedProgress = Number(progress) <= 1 ? Number(progress) * 100 : Number(progress);
        setCompileProgress(Math.max(0, Math.min(100, Math.round(normalizedProgress))));
      });

      const compiled = compiler.exportData();
      const blob = new Blob([compiled], { type: 'application/octet-stream' });

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

      const clearHandlers = () => {
        video.oncanplay = null;
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

      video.oncanplay = () => {
        video.play().then(onSuccess).catch(onFailure);
      };
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

    try {
      const response = await listActivePuzzles();
      const active = Array.isArray(response?.puzzles) ? response.puzzles : [];

      if (active.length === 0) {
        throw new Error('No active puzzle found. Add and activate one puzzle from admin.');
      }

      setPuzzles(active);
      setSelectedPuzzleId(String(active[0].id));
      setStatusText('Preparing puzzle target...');
    } catch (error) {
      // Fallback keeps scanner usable even if backend/CORS is temporarily unavailable.
      setPuzzles([LOCAL_FALLBACK_PUZZLE]);
      setSelectedPuzzleId(String(LOCAL_FALLBACK_PUZZLE.id));
      setCameraError('');
      setStatusText('Using built-in puzzle data. Point camera at the puzzle image.');
    } finally {
      setLoadingPuzzles(false);
    }
  }, []);

  const resetScanner = useCallback(() => {
    stopOverlayVideo();
    setPuzzleDetected(false);
    setVideoState('idle');
    setRebuildNonce((current) => current + 1);

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
      setCameraReady(true);
      setIsScanning(true);
      setStatusText('Camera ready. Point at the puzzle image.');
    };

    const onError = () => {
      setCameraError('Could not open camera. Allow camera permission and retry.');
      setStatusText('Camera failed to start.');
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

    return () => {
      stopOverlayVideo();

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
                renderer="precision: mediump; colorManagement: true; physicallyCorrectLights: true"
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
                    loop
                    style={{ display: 'none' }}
                  />
                </a-assets>
                <a-camera position="0 0 0" look-controls="enabled: false" />
                <a-entity ref={targetRef} mindar-image-target="targetIndex: 0">
                  <a-plane
                    position="0 0 0"
                    width="1"
                    height="0.56"
                    material={`shader: flat; src: #${VIDEO_ASSET_ID}; transparent: true; opacity: 1;`}
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
