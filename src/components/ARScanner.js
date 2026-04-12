import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { listActivePuzzles } from '../services/puzzleService';
import { sortPlaybackSources } from '../utils/arUtils';

const VIDEO_ASSET_ID = 'mindar-overlay-video';
const DIRECT_SOURCE_TIMEOUT_MS = 4500;

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
  const [statusText, setStatusText] = useState('Preparing AR runtime...');
  const [cameraError, setCameraError] = useState('');

  const [activePuzzle, setActivePuzzle] = useState(null);
  const [activeSource, setActiveSource] = useState(null);
  const [videoState, setVideoState] = useState('idle');
  const [youtubeFallbackUrl, setYoutubeFallbackUrl] = useState('');

  const selectedPuzzle = useMemo(
    () => puzzles.find((puzzle) => String(puzzle.id) === String(selectedPuzzleId)) || null,
    [puzzles, selectedPuzzleId]
  );

  const sourceLabel = useMemo(() => {
    if (!activeSource) {
      return 'none';
    }

    return activeSource.type || 'source';
  }, [activeSource]);

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
        setStatusText('No direct MP4/HLS source is available for this puzzle.');
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
        setStatusText('AR video asset is unavailable.');
        return;
      }

      setActiveSource(source);
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
        setStatusText('Puzzle tracked. AR video is anchored and playing.');
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
      setStatusText('Puzzle list loaded. Building marker target from puzzle image...');
    } catch (error) {
      setCameraError(error.message || 'Failed to load active puzzles.');
    } finally {
      setLoadingPuzzles(false);
    }
  }, []);

  const resetScanner = useCallback(() => {
    stopOverlayVideo();
    setPuzzleDetected(false);
    setActivePuzzle(null);
    setActiveSource(null);
    setVideoState('idle');

    if (cameraReady) {
      setStatusText('Point your camera at the puzzle image to lock tracking.');
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
        setStatusText('MindAR runtime is ready. Loading active puzzles...');
        window.clearInterval(timer);
        return;
      }

      retries += 1;
      if (retries > 40) {
        setCameraError('MindAR runtime failed to load. Check network and refresh.');
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
      setActivePuzzle(null);
      setActiveSource(null);
      setVideoState('idle');
      setYoutubeFallbackUrl('');
      setCameraError('');
      setStatusText('Compiling target from puzzle image. Hold on...');

      try {
        const nextUrl = await compileTargetFromImage(selectedPuzzle.puzzleImageUrl);

        if (canceled) {
          URL.revokeObjectURL(nextUrl);
          return;
        }

        revokeCompiledUrl();
        compiledBlobUrlRef.current = nextUrl;
        setCompiledTargetUrl(nextUrl);
        setStatusText('Target ready. Point camera at the puzzle to start AR.');
      } catch (error) {
        if (!canceled) {
          setCameraError(error.message || 'Failed to compile puzzle image target.');
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
      setStatusText('Scanner is live. Move closer until the puzzle locks.');
    };

    const onError = () => {
      setCameraError('AR camera failed to initialize.');
      setStatusText('Camera initialization failed.');
    };

    const onFound = () => {
      const sortedSources = sortPlaybackSources(selectedPuzzle.playbackSources || []);

      setPuzzleDetected(true);
      setIsScanning(false);
      setActivePuzzle(selectedPuzzle);
      playFromSources(sortedSources, 0);
    };

    const onLost = () => {
      setPuzzleDetected(false);
      setIsScanning(true);
      setStatusText('Target lost. Point back at the puzzle image.');
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
            <h1>Puzzle AR Scanner</h1>
            <p>
              Professional puzzle-only AR. MindAR now tracks the puzzle image directly with no QR fallback.
            </p>
          </div>

          <div className="scanner-toolbar">
            <label>
              Puzzle Target
              <select
                value={selectedPuzzleId}
                onChange={(event) => setSelectedPuzzleId(event.target.value)}
                disabled={loadingPuzzles || compilingTarget || puzzles.length <= 1}
              >
                {puzzles.map((puzzle) => (
                  <option key={puzzle.id} value={puzzle.id}>
                    {puzzle.name}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              className="btn"
              disabled={compilingTarget || !selectedPuzzle}
              onClick={() => {
                setRebuildNonce((current) => current + 1);
              }}
            >
              Rebuild Target
            </button>

            <button type="button" className="btn btn-primary" onClick={resetScanner}>
              Rescan
            </button>
          </div>
        </header>

        <div className="status-row">
          <span className={`status-pill ${runtimeReady ? 'ok' : 'pending'}`}>
            {runtimeReady ? 'MindAR Ready' : 'Loading Runtime'}
          </span>
          <span className={`status-pill ${cameraReady ? 'ok' : 'pending'}`}>
            {cameraReady ? 'Camera Ready' : 'Camera Starting'}
          </span>
          <span className={`status-pill ${puzzleDetected ? 'ok' : isScanning ? 'pending' : ''}`}>
            {puzzleDetected ? 'Puzzle Locked' : isScanning ? 'Scanning' : 'Standby'}
          </span>
          <span className="status-detail">{statusText}</span>
        </div>

        {compilingTarget && (
          <div className="compile-progress" aria-label="target compile progress">
            <div className="compile-progress-fill" style={{ width: `${compileProgress}%` }} />
          </div>
        )}

        <div className="stage-wrap">
          {!runtimeReady || loadingPuzzles || compilingTarget || !compiledTargetUrl ? (
            <div className="stage-loading">
              <h3>Preparing Scanner</h3>
              <p>
                {compilingTarget
                  ? `Compiling image target ${compileProgress}%`
                  : 'Loading puzzle tracker and camera modules...'}
              </p>
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
                    <p>Point camera to the selected puzzle image</p>
                    <small>Keep the full puzzle in frame with good lighting</small>
                  </div>
                </div>
              )}
            </>
          )}

          {activePuzzle && (
            <div className="overlay-badge">
              <span>{activePuzzle.name}</span>
              <small>Source: {sourceLabel}</small>
            </div>
          )}

          {cameraError && (
            <div className="stage-error">
              <h3>Scanner Error</h3>
              <p>{cameraError}</p>
              <button type="button" className="btn btn-primary" onClick={loadPuzzles}>
                Retry Setup
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

        {selectedPuzzle && (
          <section className="puzzle-meta card">
            <h3>Selected Puzzle</h3>
            <p>{selectedPuzzle.description || 'No puzzle description provided yet.'}</p>
            <div className="meta-grid">
              <div>
                <strong>Marker ID</strong>
                <span>{selectedPuzzle.markerId || 'auto-runtime target'}</span>
              </div>
              <div>
                <strong>Image Source</strong>
                <span>{selectedPuzzle.puzzleImageUrl || 'missing'}</span>
              </div>
              <div>
                <strong>Playback Sources</strong>
                <span>{selectedPuzzle.playbackSources?.length || 0}</span>
              </div>
              <div>
                <strong>Status</strong>
                <span>{selectedPuzzle.isActive ? 'active' : 'inactive'}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export default ARScanner;
