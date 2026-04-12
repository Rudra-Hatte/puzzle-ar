import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import jsQR from 'jsqr';
import { resolvePuzzleByCode } from '../services/puzzleService';
import {
  extractYouTubeEmbedUrl,
  normalizeScanPayload,
  sortPlaybackSources,
} from '../utils/arUtils';

const DETECTION_INTERVAL_MS = 280;
const SCAN_COOLDOWN_MS = 1600;
const DIRECT_SOURCE_TIMEOUT_MS = 4500;

function ARScanner() {
  const cameraRef = useRef(null);
  const overlayVideoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const detectionIntervalRef = useRef(null);
  const startDetectionRef = useRef(() => {});
  const lastScanRef = useRef({ code: '', at: 0 });
  const markerInfoShownRef = useRef(false);

  const [cameraReady, setCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [isResolving, setIsResolving] = useState(false);
  const [detectionMode, setDetectionMode] = useState('marker');
  const [useFrontCamera, setUseFrontCamera] = useState(false);
  const [confidence, setConfidence] = useState(0);
  const [statusText, setStatusText] = useState('Waiting for camera permission');

  const [puzzleDetected, setPuzzleDetected] = useState(false);
  const [activePuzzle, setActivePuzzle] = useState(null);
  const [activeSource, setActiveSource] = useState(null);
  const [videoState, setVideoState] = useState('idle');

  const stopDetection = useCallback(() => {
    if (detectionIntervalRef.current) {
      window.clearInterval(detectionIntervalRef.current);
      detectionIntervalRef.current = null;
    }
  }, []);

  const stopCameraStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  }, []);

  const cleanup = useCallback(() => {
    stopDetection();
    stopCameraStream();
  }, [stopDetection, stopCameraStream]);

  const detectQRCode = useCallback(() => {
    const video = cameraRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas || video.readyState < 2) {
      return null;
    }

    const width = video.videoWidth || 1280;
    const height = video.videoHeight || 720;

    const context = canvas.getContext('2d', { willReadFrequently: true });
    canvas.width = width;
    canvas.height = height;

    context.drawImage(video, 0, 0, width, height);
    const imageData = context.getImageData(0, 0, width, height);
    const qrCode = jsQR(imageData.data, width, height, { inversionAttempts: 'dontInvert' });

    if (!qrCode || !qrCode.data) {
      return null;
    }

    return {
      via: 'qr',
      code: qrCode.data,
      confidence: 96,
    };
  }, []);

  const detectMarkerPlaceholder = useCallback(() => {
    if (!markerInfoShownRef.current) {
      markerInfoShownRef.current = true;
      setStatusText('Marker mode active. QR fallback is currently handling detection until marker targets are wired.');
    }

    return null;
  }, []);

  const playFromSources = useCallback((sources, startIndex = 0) => {
    if (!Array.isArray(sources) || startIndex >= sources.length) {
      setVideoState('error');
      setStatusText('No playable video source was found for this puzzle.');
      return;
    }

    const source = sources[startIndex];
    setActiveSource(source);

    if (source.type === 'youtube') {
      const embedUrl = extractYouTubeEmbedUrl(source.url);

      if (!embedUrl) {
        playFromSources(sources, startIndex + 1);
        return;
      }

      setActiveSource({ ...source, embedUrl });
      setVideoState('playing');
      setStatusText('Playing YouTube fallback source.');
      return;
    }

    const video = overlayVideoRef.current;

    if (!video) {
      setVideoState('error');
      setStatusText('Video layer is unavailable.');
      return;
    }

    setVideoState('loading');
    setStatusText(`Loading ${source.type.toUpperCase()} source...`);

    let timeoutId = null;
    let resolved = false;

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
      setStatusText('AR playback is running on the puzzle.');
    };

    video.pause();
    video.removeAttribute('src');
    video.load();

    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.crossOrigin = 'anonymous';

    video.oncanplay = () => {
      video.play().then(onSuccess).catch(onFailure);
    };
    video.onplaying = onSuccess;
    video.onerror = onFailure;

    timeoutId = window.setTimeout(onFailure, DIRECT_SOURCE_TIMEOUT_MS);

    video.src = source.url;
    video.load();
  }, []);

  const resolveDetectedPuzzle = useCallback(
    async (rawCode, via) => {
      const normalizedCode = normalizeScanPayload(rawCode);

      if (!normalizedCode || isResolving || puzzleDetected) {
        return;
      }

      const now = Date.now();
      if (
        lastScanRef.current.code === normalizedCode &&
        now - lastScanRef.current.at < SCAN_COOLDOWN_MS
      ) {
        return;
      }

      lastScanRef.current = { code: normalizedCode, at: now };

      setIsResolving(true);
      setStatusText(`Detected ${via.toUpperCase()} target. Resolving puzzle...`);

      try {
        const response = await resolvePuzzleByCode(normalizedCode);
        const puzzle = response?.puzzle;

        if (!puzzle) {
          throw new Error('Puzzle not found');
        }

        const playableSources = sortPlaybackSources(puzzle.playbackSources || []);

        if (playableSources.length === 0) {
          throw new Error('Puzzle has no configured playback source');
        }

        stopDetection();
        setPuzzleDetected(true);
        setIsScanning(false);
        setActivePuzzle(puzzle);
        setConfidence(100);

        playFromSources(playableSources, 0);
      } catch (error) {
        setPuzzleDetected(false);
        setActivePuzzle(null);
        setActiveSource(null);
        setVideoState('idle');
        setStatusText(error.message || 'Scan detected but puzzle resolution failed.');
      } finally {
        setIsResolving(false);
      }
    },
    [isResolving, playFromSources, puzzleDetected, stopDetection]
  );

  const runDetectionTick = useCallback(() => {
    if (!cameraReady || !isScanning || isResolving || puzzleDetected) {
      return;
    }

    let detection = null;

    if (detectionMode === 'marker') {
      detection = detectMarkerPlaceholder();
      setConfidence((current) => Math.max(current, 20));
    }

    if (!detection) {
      detection = detectQRCode();
    }

    if (!detection) {
      setConfidence((current) => Math.max(current - 5, detectionMode === 'marker' ? 18 : 6));
      return;
    }

    setConfidence(detection.confidence || 90);
    resolveDetectedPuzzle(detection.code, detection.via || 'scan');
  }, [
    cameraReady,
    isScanning,
    isResolving,
    puzzleDetected,
    detectionMode,
    detectMarkerPlaceholder,
    detectQRCode,
    resolveDetectedPuzzle,
  ]);

  const startDetection = useCallback(() => {
    stopDetection();
    setIsScanning(true);
    setStatusText(
      detectionMode === 'marker'
        ? 'Marker mode is enabled. QR fallback is live for immediate reliability.'
        : 'QR mode is enabled. Point at the puzzle QR to start AR.'
    );

    detectionIntervalRef.current = window.setInterval(() => {
      runDetectionTick();
    }, DETECTION_INTERVAL_MS);
  }, [detectionMode, runDetectionTick, stopDetection]);

  useEffect(() => {
    startDetectionRef.current = startDetection;
  }, [startDetection]);

  const startCamera = useCallback(async () => {
    setCameraError('');
    setCameraReady(false);
    setStatusText('Requesting camera access...');

    stopDetection();
    stopCameraStream();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: useFrontCamera ? 'user' : 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      streamRef.current = stream;

      const camera = cameraRef.current;
      if (!camera) {
        throw new Error('Camera element is unavailable');
      }

      camera.srcObject = stream;
      camera.onloadedmetadata = () => {
        camera
          .play()
          .then(() => {
            setCameraReady(true);
            setStatusText('Camera ready. Scanning started.');
            startDetectionRef.current();
          })
          .catch(() => {
            setCameraError('Camera stream could not start playback.');
          });
      };
    } catch (error) {
      setCameraError(error.message || 'Unable to access camera.');
      setStatusText('Camera access failed.');
    }
  }, [stopCameraStream, stopDetection, useFrontCamera]);

  const resetScanner = useCallback(() => {
    setPuzzleDetected(false);
    setActivePuzzle(null);
    setActiveSource(null);
    setVideoState('idle');
    setConfidence(0);
    markerInfoShownRef.current = false;

    if (overlayVideoRef.current) {
      overlayVideoRef.current.pause();
      overlayVideoRef.current.removeAttribute('src');
      overlayVideoRef.current.load();
    }

    if (cameraReady) {
      startDetection();
      return;
    }

    startCamera();
  }, [cameraReady, startCamera, startDetection]);

  const toggleCameraFacing = useCallback(() => {
    setUseFrontCamera((current) => !current);
    setPuzzleDetected(false);
    setActivePuzzle(null);
    setActiveSource(null);
    setVideoState('idle');
  }, []);

  useEffect(() => {
    startCamera();

    return () => {
      cleanup();
    };
  }, [cleanup, startCamera]);

  useEffect(() => {
    if (!cameraReady || puzzleDetected) {
      return;
    }

    startDetection();
  }, [cameraReady, detectionMode, puzzleDetected, startDetection]);

  const sourceLabel = useMemo(() => {
    if (!activeSource) {
      return 'idle';
    }

    return activeSource.type || 'source';
  }, [activeSource]);

  return (
    <section className="scanner-page">
      <div className="scanner-panel card">
        <header className="scanner-header">
          <div>
            <h1>Interactive Puzzle AR Scanner</h1>
            <p>
              Scan puzzle targets and play mapped AR videos. Marker mode is prepared with QR fallback for
              production reliability.
            </p>
          </div>

          <div className="scanner-toolbar">
            <label>
              Detection Mode
              <select
                value={detectionMode}
                onChange={(event) => setDetectionMode(event.target.value)}
                disabled={isResolving}
              >
                <option value="marker">Marker + QR fallback</option>
                <option value="qr">QR only</option>
              </select>
            </label>

            <button type="button" className="btn" onClick={toggleCameraFacing} disabled={isResolving}>
              {useFrontCamera ? 'Use Rear Camera' : 'Use Front Camera'}
            </button>

            <button type="button" className="btn btn-primary" onClick={resetScanner}>
              Rescan
            </button>
          </div>
        </header>

        <div className="status-row">
          <span className={`status-pill ${cameraReady ? 'ok' : 'pending'}`}>
            {cameraReady ? 'Camera Ready' : 'Camera Booting'}
          </span>
          <span className={`status-pill ${puzzleDetected ? 'ok' : isResolving ? 'pending' : ''}`}>
            {puzzleDetected ? 'Puzzle Locked' : isResolving ? 'Resolving Puzzle' : 'Scanning'}
          </span>
          <span className="status-detail">{statusText}</span>
        </div>

        <div className="confidence-meter" aria-label="scan confidence">
          <div className="confidence-fill" style={{ width: `${Math.min(confidence, 100)}%` }} />
        </div>

        <div className="stage-wrap">
          <video ref={cameraRef} className="camera-feed" muted autoPlay playsInline />
          <canvas ref={canvasRef} style={{ display: 'none' }} />

          {isScanning && !puzzleDetected && !cameraError && (
            <div className="scan-overlay">
              <div className="scan-frame">
                <p>{detectionMode === 'marker' ? 'Marker scan active with QR fallback' : 'Point at puzzle QR'}</p>
                <small>Confidence: {confidence}%</small>
              </div>
            </div>
          )}

          {puzzleDetected && activePuzzle && (
            <div className="ar-overlay">
              {activeSource?.type === 'youtube' && activeSource.embedUrl ? (
                <iframe
                  className="ar-youtube"
                  src={activeSource.embedUrl}
                  title={`${activePuzzle.name} AR video`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  ref={overlayVideoRef}
                  className={`ar-video ${videoState === 'playing' ? 'visible' : ''}`}
                  muted
                  playsInline
                  loop
                />
              )}

              {videoState !== 'playing' && (
                <div className="video-state">
                  <p>{videoState === 'error' ? 'Unable to play source' : 'Preparing AR video...'}</p>
                </div>
              )}

              <div className="overlay-badge">
                <span>{activePuzzle.name}</span>
                <small>Source: {sourceLabel}</small>
              </div>
            </div>
          )}

          {cameraError && (
            <div className="stage-error">
              <h3>Camera Error</h3>
              <p>{cameraError}</p>
              <button type="button" className="btn btn-primary" onClick={startCamera}>
                Retry Camera
              </button>
            </div>
          )}
        </div>

        {activePuzzle && (
          <section className="puzzle-meta card">
            <h3>Detected Puzzle</h3>
            <p>{activePuzzle.description || 'No puzzle description provided yet.'}</p>
            <div className="meta-grid">
              <div>
                <strong>Scan Code</strong>
                <span>{activePuzzle.scanCode}</span>
              </div>
              <div>
                <strong>Marker ID</strong>
                <span>{activePuzzle.markerId || 'not configured'}</span>
              </div>
              <div>
                <strong>Sources</strong>
                <span>{activePuzzle.playbackSources?.length || 0}</span>
              </div>
              <div>
                <strong>Status</strong>
                <span>{activePuzzle.isActive ? 'active' : 'inactive'}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export default ARScanner;
