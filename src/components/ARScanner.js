import React, { useCallback, useEffect, useRef, useState } from 'react';

const SCRIPT_TIMEOUT_MS = 12000;
const HLS_WAIT_TIMEOUT_MS = 5000;
const ENGINE_SLOW_FALLBACK_MS = 2200;
const TARGET_CACHE_KEY = 'prototype-mindar-target-v1';

const AFRAME_SCRIPT_URLS = [
  'https://aframe.io/releases/1.5.0/aframe.min.js',
  'https://aframe.io/releases/1.4.2/aframe.min.js',
];
const MINDAR_AFRAME_SCRIPT_URLS = ['https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js'];
const MINDAR_COMPILER_SCRIPT_URLS = ['https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-three.prod.js'];
const HLS_SCRIPT_URLS = [
  'https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js',
  'https://unpkg.com/hls.js@1.5.17/dist/hls.min.js',
];

const PROTOTYPE_PUZZLE = {
  id: 'prototype-convex-lens',
  name: 'Convex Lens Puzzle',
  markerId: 'convex-lens-001',
  puzzleImageUrl: '/images/convex-lens.jpeg',
  posterImageUrl: '/images/ezgif-3c36c39b47974884-jpg/ezgif-frame-001.jpg',
  mindTargetUrl: '/markers/convex-lens.mind',
  hlsUrl: '/videos/hls/convex-lens.m3u8',
  videoUrl: '/videos/convex-lens.mp4',
};

function createInitialDebugInfo() {
  return {
    engine: 'idle',
    targetSource: 'none',
    puzzleName: '-',
    sourceUrl: '-',
    sceneReady: false,
    videoReady: false,
    detected: false,
    playbackMode: 'idle',
    note: 'Initializing...',
  };
}

function loadScript(url, timeoutMs = SCRIPT_TIMEOUT_MS) {
  return new Promise((resolve, reject) => {
    const absoluteUrl = new URL(url, window.location.origin).href;
    const existingScript = Array.from(document.scripts).find((script) => script.src === absoluteUrl);

    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = absoluteUrl;

    const timeoutId = window.setTimeout(() => {
      cleanup();
      script.remove();
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

async function ensureScriptLoaded(urls, testReady, timeoutMs, label) {
  if (testReady()) {
    return;
  }

  let lastError = null;
  for (const url of urls) {
    try {
      await loadScript(url, timeoutMs);
      if (testReady()) {
        return;
      }
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error(`${label} failed to load.`);
}

async function ensureHlsScriptLoaded(timeoutMs = HLS_WAIT_TIMEOUT_MS) {
  await ensureScriptLoaded(HLS_SCRIPT_URLS, () => Boolean(window.Hls), timeoutMs, 'HLS script');
  return window.Hls;
}

async function ensureMindarAframeLoaded(timeoutMs = SCRIPT_TIMEOUT_MS) {
  await ensureScriptLoaded(
    AFRAME_SCRIPT_URLS,
    () => Boolean(window.AFRAME),
    timeoutMs,
    'A-Frame script'
  );
  await ensureScriptLoaded(
    MINDAR_AFRAME_SCRIPT_URLS,
    () => Boolean(window.AFRAME && window.AFRAME.components && window.AFRAME.components['mindar-image']),
    timeoutMs,
    'MindAR A-Frame script'
  );
}

async function ensureMindarCompilerLoaded(timeoutMs = SCRIPT_TIMEOUT_MS) {
  await ensureScriptLoaded(
    MINDAR_COMPILER_SCRIPT_URLS,
    () => Boolean(window.MINDAR && window.MINDAR.IMAGE && window.MINDAR.IMAGE.Compiler),
    timeoutMs,
    'MindAR compiler script'
  );
}

async function urlExists(url) {
  try {
    const headResponse = await fetch(url, { method: 'HEAD', cache: 'no-store' });
    if (headResponse.ok) {
      return true;
    }
  } catch (error) {
    // Continue with GET fallback.
  }

  try {
    const getResponse = await fetch(url, { method: 'GET', cache: 'no-store' });
    return getResponse.ok;
  } catch (error) {
    return false;
  }
}

function bufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const chunkSize = 0x8000;

  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, Math.min(index + chunkSize, bytes.length));
    binary += String.fromCharCode(...chunk);
  }

  return window.btoa(binary);
}

function base64ToBuffer(base64String) {
  const binary = window.atob(base64String);
  const length = binary.length;
  const bytes = new Uint8Array(length);

  for (let index = 0; index < length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes.buffer;
}

async function compileMindTargetFromImage(imageUrl) {
  await ensureMindarCompilerLoaded();

  if (!window.MINDAR || !window.MINDAR.IMAGE || !window.MINDAR.IMAGE.Compiler) {
    throw new Error('MindAR compiler is unavailable.');
  }

  const imageResponse = await fetch(imageUrl, { cache: 'force-cache' });
  if (!imageResponse.ok) {
    throw new Error('Failed to load puzzle image for MindAR compilation.');
  }

  const blob = await imageResponse.blob();
  const file = new File([blob], 'prototype-target.jpg', { type: blob.type || 'image/jpeg' });

  const compiler = new window.MINDAR.IMAGE.Compiler();
  await compiler.compileImageTargets([file]);
  const targetBuffer = await compiler.exportData();

  return targetBuffer;
}

function ARScanner() {
  const sceneRef = useRef(null);
  const targetEntityRef = useRef(null);
  const targetPlaneRef = useRef(null);
  const sourceVideoRef = useRef(null);
  const manualVideoRef = useRef(null);
  const hlsControllerRef = useRef(null);
  const fallbackTimerRef = useRef(0);
  const dynamicTargetUrlRef = useRef('');
  const manualDemoModeRef = useRef(false);
  const statusRef = useRef('Tap Start Scanner to begin.');
  const debugInfoRef = useRef(createInitialDebugInfo());

  const [statusText, setStatusText] = useState('Tap Start Scanner to begin.');
  const [cameraError, setCameraError] = useState('');
  const [loading, setLoading] = useState(false);
  const [scannerStarted, setScannerStarted] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [targetSrc, setTargetSrc] = useState('');
  const [targetSource, setTargetSource] = useState('none');
  const [sourceVideoReady, setSourceVideoReady] = useState(false);
  const [puzzleDetected, setPuzzleDetected] = useState(false);
  const [manualDemoMode, setManualDemoMode] = useState(false);
  const [manualVideoReady, setManualVideoReady] = useState(false);
  const [initNonce, setInitNonce] = useState(0);
  const [debugVisible, setDebugVisible] = useState(false);
  const [debugInfo, setDebugInfo] = useState(createInitialDebugInfo);

  const setStatus = useCallback((text) => {
    if (statusRef.current === text) {
      return;
    }

    statusRef.current = text;
    setStatusText(text);
  }, []);

  const updateDebug = useCallback((partial, force = false) => {
    const next = { ...debugInfoRef.current, ...partial };
    debugInfoRef.current = next;
    if (force) {
      setDebugInfo(next);
      return;
    }

    setDebugInfo(next);
  }, []);

  const clearFallbackTimer = useCallback(() => {
    if (fallbackTimerRef.current) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = 0;
    }
  }, []);

  const clearHlsController = useCallback(() => {
    if (hlsControllerRef.current) {
      hlsControllerRef.current.destroy();
      hlsControllerRef.current = null;
    }
  }, []);

  const revokeDynamicTargetUrl = useCallback(() => {
    if (dynamicTargetUrlRef.current) {
      URL.revokeObjectURL(dynamicTargetUrlRef.current);
      dynamicTargetUrlRef.current = '';
    }
  }, []);

  const setMindarPlaneSource = useCallback((mode) => {
    const plane = targetPlaneRef.current;
    if (!plane) {
      return;
    }

    if (mode === 'video') {
      plane.setAttribute(
        'material',
        'shader: flat; src: #mindar-video-source; transparent: true; opacity: 1;'
      );
      return;
    }

    plane.setAttribute(
      'material',
      'shader: flat; src: #mindar-poster-source; transparent: true; opacity: 1;'
    );
  }, []);

  const activateManualFallback = useCallback(
    (noteText) => {
      clearFallbackTimer();
      setLoading(false);
      setManualVideoReady(false);
      setManualDemoMode(true);
      setPuzzleDetected(true);
      setStatus('Poster shown instantly. Video buffering...');
      updateDebug(
        {
          engine: 'manual',
          detected: true,
          playbackMode: 'poster',
          videoReady: false,
          note:
            noteText ||
            'MindAR is taking too long. Manual poster/video fallback is active for prototype demo.',
        },
        true
      );
    },
    [clearFallbackTimer, setStatus, updateDebug]
  );

  const configureSourceVideo = useCallback(async () => {
    const sourceVideo = sourceVideoRef.current;
    if (!sourceVideo) {
      return;
    }

    clearHlsController();
    setSourceVideoReady(false);

    sourceVideo.pause();
    sourceVideo.removeAttribute('src');
    sourceVideo.muted = true;
    sourceVideo.loop = true;
    sourceVideo.playsInline = true;
    sourceVideo.setAttribute('playsinline', 'true');
    sourceVideo.preload = 'auto';
    sourceVideo.crossOrigin = 'anonymous';

    const onVideoReady = () => {
      setSourceVideoReady(true);
      updateDebug(
        {
          videoReady: true,
          note: 'Video source is buffered and ready.',
        },
        true
      );
    };

    sourceVideo.oncanplay = onVideoReady;
    sourceVideo.oncanplaythrough = onVideoReady;

    let selectedSource = PROTOTYPE_PUZZLE.videoUrl;
    let playbackMode = 'mp4';

    if (PROTOTYPE_PUZZLE.hlsUrl) {
      const nativeHlsSupported = Boolean(
        sourceVideo.canPlayType('application/vnd.apple.mpegurl') ||
          sourceVideo.canPlayType('application/x-mpegURL')
      );

      if (nativeHlsSupported) {
        selectedSource = PROTOTYPE_PUZZLE.hlsUrl;
        playbackMode = 'hls-native';
      } else {
        try {
          const Hls = await ensureHlsScriptLoaded();
          if (Hls && typeof Hls.isSupported === 'function' && Hls.isSupported()) {
            const hls = new Hls({
              enableWorker: true,
              lowLatencyMode: true,
            });

            hlsControllerRef.current = hls;
            hls.attachMedia(sourceVideo);
            hls.loadSource(PROTOTYPE_PUZZLE.hlsUrl);

            hls.on(Hls.Events.ERROR, (_event, data) => {
              if (!data || !data.fatal) {
                return;
              }

              clearHlsController();
              sourceVideo.src = PROTOTYPE_PUZZLE.videoUrl;
              sourceVideo.load();
              updateDebug(
                {
                  sourceUrl: PROTOTYPE_PUZZLE.videoUrl,
                  playbackMode: 'mp4',
                  note: 'HLS error. Falling back to MP4 source.',
                },
                true
              );
            });

            selectedSource = PROTOTYPE_PUZZLE.hlsUrl;
            playbackMode = 'hls-js';
          }
        } catch (error) {
          selectedSource = PROTOTYPE_PUZZLE.videoUrl;
          playbackMode = 'mp4';
        }
      }
    }

    if (playbackMode === 'hls-js') {
      sourceVideo.load();
    } else {
      sourceVideo.src = selectedSource;
      sourceVideo.load();
    }

    updateDebug(
      {
        sourceUrl: selectedSource,
        playbackMode,
        videoReady: false,
      },
      true
    );
  }, [clearHlsController, updateDebug]);

  const resolveTargetSource = useCallback(async () => {
    updateDebug({ note: 'Looking for prebuilt MindAR target...', targetSource: 'checking' }, true);

    if (await urlExists(PROTOTYPE_PUZZLE.mindTargetUrl)) {
      return {
        url: PROTOTYPE_PUZZLE.mindTargetUrl,
        source: 'static',
      };
    }

    updateDebug({ note: 'No prebuilt target found. Checking local cache...', targetSource: 'cache' }, true);

    const cachedBase64 = window.localStorage.getItem(TARGET_CACHE_KEY);
    if (cachedBase64) {
      try {
        const buffer = base64ToBuffer(cachedBase64);
        const blob = new Blob([buffer], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        dynamicTargetUrlRef.current = url;
        return {
          url,
          source: 'cached-compiled',
        };
      } catch (error) {
        window.localStorage.removeItem(TARGET_CACHE_KEY);
      }
    }

    updateDebug({ note: 'Compiling target from puzzle image (first run only)...', targetSource: 'compile' }, true);

    const compiledBuffer = await compileMindTargetFromImage(PROTOTYPE_PUZZLE.puzzleImageUrl);
    try {
      window.localStorage.setItem(TARGET_CACHE_KEY, bufferToBase64(compiledBuffer));
    } catch (error) {
      // Ignore storage quota errors and continue using in-memory blob.
    }

    const blob = new Blob([compiledBuffer], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    dynamicTargetUrlRef.current = url;

    return {
      url,
      source: 'compiled',
    };
  }, [updateDebug]);

  useEffect(() => {
    manualDemoModeRef.current = manualDemoMode;
  }, [manualDemoMode]);

  useEffect(() => {
    if (!scannerStarted) {
      return undefined;
    }

    let canceled = false;
    const sourceVideoAtMount = sourceVideoRef.current;

    const startMindar = async () => {
      try {
        setLoading(true);
        setCameraError('');
        setSceneReady(false);
        setTargetSrc('');
        setTargetSource('none');
        setSourceVideoReady(false);
        setPuzzleDetected(false);
        setManualDemoMode(false);
        setManualVideoReady(false);
        updateDebug(
          {
            engine: 'loading',
            targetSource: 'none',
            puzzleName: PROTOTYPE_PUZZLE.name,
            sourceUrl: PROTOTYPE_PUZZLE.hlsUrl || PROTOTYPE_PUZZLE.videoUrl,
            sceneReady: false,
            videoReady: false,
            detected: false,
            playbackMode: 'idle',
            note: 'Starting scanner...',
          },
          true
        );
        setStatus('Loading scanner engine...');

        clearFallbackTimer();
        fallbackTimerRef.current = window.setTimeout(() => {
          if (canceled || manualDemoModeRef.current) {
            return;
          }

          activateManualFallback('MindAR engine is still loading. Showing instant poster fallback.');
        }, ENGINE_SLOW_FALLBACK_MS);

        await configureSourceVideo();
        if (canceled) return;

        await ensureMindarAframeLoaded();
        if (canceled) return;

        const targetResult = await resolveTargetSource();
        if (canceled) return;

        setTargetSource(targetResult.source);
        setTargetSrc(targetResult.url);
        setLoading(false);
        setStatus('Point camera at the puzzle image.');
        updateDebug(
          {
            engine: 'mindar',
            targetSource: targetResult.source,
            note: 'MindAR target is ready.',
          },
          true
        );
      } catch (error) {
        if (canceled) {
          return;
        }

        if (manualDemoModeRef.current) {
          setLoading(false);
          setCameraError('');
          setStatus('Demo mode active. MindAR is still initializing in background.');
          updateDebug(
            {
              note: 'MindAR initialization failed, but demo fallback stays active.',
            },
            true
          );
          return;
        }

        activateManualFallback('MindAR initialization failed. Demo fallback activated.');
      } finally {
        clearFallbackTimer();
      }
    };

    startMindar();

    return () => {
      canceled = true;
      clearFallbackTimer();
      clearHlsController();

      const sourceVideo = sourceVideoAtMount;
      if (sourceVideo) {
        sourceVideo.pause();
        sourceVideo.oncanplay = null;
        sourceVideo.oncanplaythrough = null;
        sourceVideo.removeAttribute('src');
        sourceVideo.load();
      }

      revokeDynamicTargetUrl();
    };
  }, [
    scannerStarted,
    initNonce,
    activateManualFallback,
    clearFallbackTimer,
    clearHlsController,
    configureSourceVideo,
    resolveTargetSource,
    revokeDynamicTargetUrl,
    setStatus,
    updateDebug,
  ]);

  useEffect(() => {
    if (!targetSrc) {
      return undefined;
    }

    const scene = sceneRef.current;
    if (!scene) {
      return undefined;
    }

    const onArReady = () => {
      setSceneReady(true);
      setLoading(false);
      updateDebug(
        {
          sceneReady: true,
          note: 'MindAR camera session is ready.',
        },
        true
      );
    };

    const onArError = () => {
      activateManualFallback('MindAR camera failed. Manual demo mode is active.');
    };

    scene.addEventListener('arReady', onArReady);
    scene.addEventListener('arError', onArError);

    return () => {
      scene.removeEventListener('arReady', onArReady);
      scene.removeEventListener('arError', onArError);
    };
  }, [targetSrc, activateManualFallback, updateDebug]);

  useEffect(() => {
    if (!targetSrc || manualDemoMode) {
      return undefined;
    }

    const targetEntity = targetEntityRef.current;
    if (!targetEntity) {
      return undefined;
    }

    const onTargetFound = () => {
      setPuzzleDetected(true);
      if (sourceVideoReady) {
        setMindarPlaneSource('video');
        setStatus('Puzzle detected. Video is playing.');
        updateDebug({ detected: true, playbackMode: 'video', note: 'Target found. Video texture active.' }, true);

        const sourceVideo = sourceVideoRef.current;
        if (sourceVideo) {
          sourceVideo.play().catch(() => {});
        }
      } else {
        setMindarPlaneSource('poster');
        setStatus('Puzzle detected. Poster shown while video buffers...');
        updateDebug({ detected: true, playbackMode: 'poster', note: 'Target found. Poster shown immediately.' }, true);
      }
    };

    const onTargetLost = () => {
      setPuzzleDetected(false);
      setMindarPlaneSource('poster');
      setStatus('Point camera at the puzzle image.');
      updateDebug({ detected: false, note: 'Target lost. Waiting for puzzle.' }, true);
    };

    targetEntity.addEventListener('targetFound', onTargetFound);
    targetEntity.addEventListener('targetLost', onTargetLost);

    return () => {
      targetEntity.removeEventListener('targetFound', onTargetFound);
      targetEntity.removeEventListener('targetLost', onTargetLost);
    };
  }, [manualDemoMode, sourceVideoReady, targetSrc, setMindarPlaneSource, setStatus, updateDebug]);

  useEffect(() => {
    if (!puzzleDetected || !sourceVideoReady || manualDemoMode) {
      return;
    }

    setMindarPlaneSource('video');
    setStatus('Puzzle detected. Video is playing.');
    updateDebug({ playbackMode: 'video', note: 'Video buffered. Swapped from poster to video.' }, true);

    const sourceVideo = sourceVideoRef.current;
    if (sourceVideo) {
      sourceVideo.play().catch(() => {});
    }
  }, [manualDemoMode, puzzleDetected, setMindarPlaneSource, setStatus, sourceVideoReady, updateDebug]);

  useEffect(() => {
    if (!manualDemoMode) {
      return undefined;
    }

    const manualVideo = manualVideoRef.current;
    if (!manualVideo) {
      return undefined;
    }

    let readyHandled = false;

    const markManualVideoReady = () => {
      if (readyHandled) {
        return;
      }

      readyHandled = true;
      setManualVideoReady(true);
      setStatus('Demo video is playing.');
      updateDebug({ videoReady: true, playbackMode: 'manual-video', note: 'Poster swapped to demo video.' }, true);
      manualVideo.play().catch(() => {});
    };

    manualVideo.muted = true;
    manualVideo.loop = true;
    manualVideo.playsInline = true;
    manualVideo.setAttribute('playsinline', 'true');
    manualVideo.preload = 'auto';

    const nativeHlsSupported = Boolean(
      manualVideo.canPlayType('application/vnd.apple.mpegurl') ||
        manualVideo.canPlayType('application/x-mpegURL')
    );

    const manualSource =
      PROTOTYPE_PUZZLE.hlsUrl && nativeHlsSupported
        ? PROTOTYPE_PUZZLE.hlsUrl
        : PROTOTYPE_PUZZLE.videoUrl;

    manualVideo.src = manualSource;
    manualVideo.load();
    manualVideo.addEventListener('canplay', markManualVideoReady);
    manualVideo.addEventListener('canplaythrough', markManualVideoReady);
    manualVideo.play().catch(() => {});

    if (manualVideo.readyState >= 2) {
      markManualVideoReady();
    }

    return () => {
      manualVideo.removeEventListener('canplay', markManualVideoReady);
      manualVideo.removeEventListener('canplaythrough', markManualVideoReady);
    };
  }, [manualDemoMode, setStatus, updateDebug]);

  const onStartScanner = useCallback(() => {
    setCameraError('');
    setManualVideoReady(false);
    setManualDemoMode(false);
    setScannerStarted(true);
    setInitNonce((value) => value + 1);
    setStatus('Loading scanner engine...');
    updateDebug({ engine: 'loading', note: 'Starting scanner...' }, true);
  }, [setStatus, updateDebug]);

  const onRescan = useCallback(() => {
    if (!scannerStarted) {
      return;
    }

    setManualDemoMode(false);
    setManualVideoReady(false);
    setPuzzleDetected(false);
    setStatus('Point camera at the puzzle image.');
    setMindarPlaneSource(sourceVideoReady ? 'video' : 'poster');
    updateDebug({ detected: false, playbackMode: 'idle', note: 'Manual rescan triggered.' }, true);
  }, [scannerStarted, setMindarPlaneSource, setStatus, sourceVideoReady, updateDebug]);

  const onManualPlay = useCallback(() => {
    if (!scannerStarted) {
      return;
    }

    activateManualFallback('Manual demo mode enabled. Tracking paused temporarily.');
  }, [activateManualFallback, scannerStarted]);

  return (
    <section className="scanner-page">
      <div className="scanner-panel card">
        <header className="scanner-header">
          <div>
            <h1>Puzzle Scanner</h1>
            <p>MindAR prototype mode: one puzzle live now, scalable architecture ready next.</p>
            <p className="hint-text">Poster appears instantly, then video swaps in when ready.</p>
          </div>

          <div className="scanner-toolbar">
            <button type="button" className="btn btn-primary" onClick={onStartScanner}>
              {scannerStarted ? 'Restart Scanner' : 'Start Scanner'}
            </button>

            {scannerStarted && (
              <>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setDebugVisible((value) => !value);
                  }}
                >
                  {debugVisible ? 'Hide Debug' : 'Show Debug'}
                </button>
                <button type="button" className="btn btn-secondary" onClick={onManualPlay}>
                  Play Demo
                </button>
                <button type="button" className="btn btn-primary" onClick={onRescan}>
                  Rescan
                </button>
              </>
            )}
          </div>
        </header>

        <p className="status-detail">{statusText}</p>

        {debugVisible && (
          <section className="debug-panel" aria-live="polite">
            <h3>Scanner Debug</h3>
            <p className="debug-note">{debugInfo.note}</p>

            <div className="debug-grid">
              <div>
                <strong>Engine</strong>
                <span>{debugInfo.engine}</span>
              </div>
              <div>
                <strong>Target Source</strong>
                <span>{targetSource}</span>
              </div>
              <div>
                <strong>Scene Ready</strong>
                <span>{sceneReady ? 'Yes' : 'No'}</span>
              </div>
              <div>
                <strong>Detected</strong>
                <span>{debugInfo.detected ? 'YES' : 'NO'}</span>
              </div>
              <div>
                <strong>Video Ready</strong>
                <span>{debugInfo.videoReady ? 'Yes' : 'No'}</span>
              </div>
              <div>
                <strong>Playback Mode</strong>
                <span>{debugInfo.playbackMode}</span>
              </div>
              <div className="debug-wide">
                <strong>Puzzle</strong>
                <span>{PROTOTYPE_PUZZLE.name}</span>
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

        <div className="stage-wrap">
          {scannerStarted && targetSrc && (
            <a-scene
              ref={sceneRef}
              className="mindar-scene"
              mindar-image={`imageTargetSrc: ${targetSrc}; autoStart: true; uiScanning: no; uiLoading: no;`}
              color-space="sRGB"
              renderer="colorManagement: true, physicallyCorrectLights: false"
              vr-mode-ui="enabled: false"
              device-orientation-permission-ui="enabled: false"
              embedded
            >
              <a-camera position="0 0 0" look-controls="enabled: false" />
              <a-entity ref={targetEntityRef} mindar-image-target="targetIndex: 0">
                <a-plane
                  ref={targetPlaneRef}
                  position="0 0 0"
                  width="1"
                  height="0.75"
                  material="shader: flat; src: #mindar-poster-source; transparent: true; opacity: 1;"
                />
              </a-entity>
            </a-scene>
          )}

          {loading && (
            <div className="stage-loading">
              <h3>Preparing Scanner</h3>
              <p>Loading MindAR engine and camera...</p>
            </div>
          )}

          {!scannerStarted && !loading && !cameraError && (
            <div className="stage-loading">
              <h3>Prototype Ready</h3>
              <p>Tap Start Scanner to launch the one-puzzle demo.</p>
            </div>
          )}

          {scannerStarted && !loading && !cameraError && !manualDemoMode && !puzzleDetected && (
            <div className="scan-overlay">
              <div className="scan-frame">
                <p>Point camera at your puzzle</p>
                <small>Keep full image in frame with good lighting</small>
              </div>
            </div>
          )}

          {scannerStarted && manualDemoMode && !cameraError && (
            <div className="ar-overlay">
              <img
                src={PROTOTYPE_PUZZLE.posterImageUrl || PROTOTYPE_PUZZLE.puzzleImageUrl}
                alt="Poster frame"
                className={`ar-poster ${manualVideoReady ? '' : 'visible'}`}
              />
              <video
                ref={manualVideoRef}
                className={`ar-video ${manualVideoReady ? 'visible' : ''}`}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="overlay-badge">
                <span>Demo Mode</span>
                <small>Instant poster fallback active</small>
              </div>
            </div>
          )}

          {cameraError && (
            <div className="stage-error">
              <h3>Scanner Error</h3>
              <p>{cameraError}</p>
              <button type="button" className="btn btn-primary" onClick={onStartScanner}>
                Retry
              </button>
            </div>
          )}
        </div>

        <img id="mindar-poster-source" src={PROTOTYPE_PUZZLE.posterImageUrl} alt="" style={{ display: 'none' }} />
        <video
          id="mindar-video-source"
          ref={sourceVideoRef}
          style={{ display: 'none' }}
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
    </section>
  );
}

export default ARScanner;
