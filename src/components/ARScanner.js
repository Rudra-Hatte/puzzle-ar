import React, { useEffect, useRef, useState, useCallback } from 'react';

function ARScanner() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayVideoRef = useRef(null);
  const detectionIntervalRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);
  const [puzzleDetected, setPuzzleDetected] = useState(false);
  const [detectedPuzzle, setDetectedPuzzle] = useState(null);
  const [error, setError] = useState(null);
  const [confidence, setConfidence] = useState(0);
  const [scanningStatus, setScanningStatus] = useState('Initializing...');

  // Puzzle database with detection patterns
  const experiments = {
    'convex-lens': {
      name: 'Light Through Convex Lens',
      video: '/videos/convex-lens.mp4',
      colorProfile: { r: [80, 120], g: [100, 150], b: [150, 200] },
      shapeKeywords: ['lens', 'oval', 'curve'],
      minConfidence: 75
    },
    'reflection': {
      name: 'Light Reflection',
      video: '/videos/reflection.mp4',
      colorProfile: { r: [120, 180], g: [120, 180], b: [120, 180] },
      shapeKeywords: ['mirror', 'straight', 'line'],
      minConfidence: 70
    },
    'prism': {
      name: 'Light Dispersion Through Prism',
      video: '/videos/prism.mp4',
      colorProfile: { r: [100, 255], g: [80, 255], b: [60, 255] },
      shapeKeywords: ['triangle', 'prism', 'spectrum'],
      minConfidence: 80
    },
    'refraction': {
      name: 'Light Refraction',
      video: '/videos/refraction.mp4',
      colorProfile: { r: [60, 120], g: [120, 200], b: [150, 255] },
      shapeKeywords: ['water', 'bend', 'curve'],
      minConfidence: 65
    }
  };

  const detectPuzzleType = useCallback((ctx, canvas, puzzleType) => {
    const experiment = experiments[puzzleType];
    let totalConfidence = 0;
    let detectionCount = 0;

    // 1. Color Analysis
    const colorConfidence = analyzeColors(ctx, canvas, experiment.colorProfile);
    totalConfidence += colorConfidence;
    detectionCount++;

    // 2. Shape/Edge Detection
    const shapeConfidence = analyzeShapes(ctx, canvas);
    totalConfidence += shapeConfidence;
    detectionCount++;

    // 3. Pattern Recognition
    const patternConfidence = analyzePatterns(ctx, canvas, puzzleType);
    totalConfidence += patternConfidence;
    detectionCount++;

    const averageConfidence = totalConfidence / detectionCount;

    return {
      confidence: averageConfidence,
      details: {
        color: colorConfidence,
        shape: shapeConfidence,
        pattern: patternConfidence
      }
    };
  }, []);

  const analyzeColors = useCallback((ctx, canvas, colorProfile) => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    let matchingPixels = 0;
    let totalPixels = 0;

    for (let i = 0; i < data.length; i += 40) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      totalPixels++;

      if (r >= colorProfile.r[0] && r <= colorProfile.r[1] &&
          g >= colorProfile.g[0] && g <= colorProfile.g[1] &&
          b >= colorProfile.b[0] && b <= colorProfile.b[1]) {
        matchingPixels++;
      }
    }

    return totalPixels > 0 ? (matchingPixels / totalPixels) * 100 : 0;
  }, []);

  const analyzeShapes = useCallback((ctx, canvas) => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    let edgePoints = 0;
    let totalPoints = 0;

    for (let y = 1; y < canvas.height - 1; y += 10) {
      for (let x = 1; x < canvas.width - 1; x += 10) {
        const idx = (y * canvas.width + x) * 4;
        const current = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
        
        const right = ((data[idx + 4] + data[idx + 5] + data[idx + 6]) / 3);
        const bottom = ((data[idx + canvas.width * 4] + data[idx + canvas.width * 4 + 1] + data[idx + canvas.width * 4 + 2]) / 3);
        
        totalPoints++;
        
        if (Math.abs(current - right) > 30 || Math.abs(current - bottom) > 30) {
          edgePoints++;
        }
      }
    }

    return totalPoints > 0 ? Math.min((edgePoints / totalPoints) * 200, 100) : 0;
  }, []);

  const analyzePatterns = useCallback((ctx, canvas, puzzleType) => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    switch (puzzleType) {
      case 'convex-lens':
        return detectLensPattern(imageData, canvas);
      case 'reflection':
        return detectMirrorPattern(imageData, canvas);
      case 'prism':
        return detectPrismPattern(imageData, canvas);
      case 'refraction':
        return detectRefractionPattern(imageData, canvas);
      default:
        return 0;
    }
  }, []);

  const detectLensPattern = useCallback((imageData, canvas) => {
    const data = imageData.data;
    let curvePoints = 0;
    let totalSamples = 0;

    for (let y = canvas.height * 0.3; y < canvas.height * 0.7; y += 15) {
      for (let x = canvas.width * 0.3; x < canvas.width * 0.7; x += 15) {
        const idx = (Math.floor(y) * canvas.width + Math.floor(x)) * 4;
        const brightness = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
        
        totalSamples++;
        
        if (brightness > 100 && brightness < 200) {
          curvePoints++;
        }
      }
    }

    return totalSamples > 0 ? (curvePoints / totalSamples) * 120 : 0;
  }, []);

  const detectMirrorPattern = useCallback((imageData, canvas) => {
    const data = imageData.data;
    let linePoints = 0;
    let totalSamples = 0;

    for (let y = 0; y < canvas.height; y += 20) {
      for (let x = 0; x < canvas.width; x += 20) {
        const idx = (y * canvas.width + x) * 4;
        const brightness = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
        
        totalSamples++;
        
        if (brightness > 180 || brightness < 50) {
          linePoints++;
        }
      }
    }

    return totalSamples > 0 ? (linePoints / totalSamples) * 100 : 0;
  }, []);

  const detectPrismPattern = useCallback((imageData, canvas) => {
    const data = imageData.data;
    let spectrumPoints = 0;
    let totalSamples = 0;

    for (let y = 0; y < canvas.height; y += 10) {
      for (let x = 0; x < canvas.width; x += 10) {
        const idx = (y * canvas.width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        
        totalSamples++;
        
        if (Math.max(r, g, b) - Math.min(r, g, b) > 50) {
          spectrumPoints++;
        }
      }
    }

    return totalSamples > 0 ? (spectrumPoints / totalSamples) * 150 : 0;
  }, []);

  const detectRefractionPattern = useCallback((imageData, canvas) => {
    const data = imageData.data;
    let bendPoints = 0;
    let totalSamples = 0;

    for (let y = 10; y < canvas.height - 10; y += 15) {
      for (let x = 10; x < canvas.width - 10; x += 15) {
        const idx = (y * canvas.width + x) * 4;
        const current = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
        
        const neighbors = [
          (data[idx - 4] + data[idx - 3] + data[idx - 2]) / 3,
          (data[idx + 4] + data[idx + 5] + data[idx + 6]) / 3,
          (data[idx - canvas.width * 4] + data[idx - canvas.width * 4 + 1] + data[idx - canvas.width * 4 + 2]) / 3,
          (data[idx + canvas.width * 4] + data[idx + canvas.width * 4 + 1] + data[idx + canvas.width * 4 + 2]) / 3
        ];

        totalSamples++;

        const avgNeighbor = neighbors.reduce((sum, n) => sum + n, 0) / neighbors.length;
        if (Math.abs(current - avgNeighbor) > 20 && Math.abs(current - avgNeighbor) < 60) {
          bendPoints++;
        }
      }
    }

    return totalSamples > 0 ? (bendPoints / totalSamples) * 110 : 0;
  }, []);

  const handlePuzzleDetected = useCallback((puzzleType, confidence) => {
    stopDetection();
    setDetectedPuzzle(puzzleType);
    setPuzzleDetected(true);
    setConfidence(confidence);
    setScanningStatus(`🎯 ${experiments[puzzleType].name} Detected! (${Math.round(confidence)}%)`);

    if (overlayVideoRef.current) {
      overlayVideoRef.current.src = experiments[puzzleType].video;
      overlayVideoRef.current.play();
    }

    setTimeout(() => {
      resetDetection();
    }, 20000);
  }, []);

  const analyzeCameraFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const detectionResults = [];
    
    Object.keys(experiments).forEach(puzzleType => {
      const result = detectPuzzleType(ctx, canvas, puzzleType);
      if (result.confidence > 0) {
        detectionResults.push({ type: puzzleType, ...result });
      }
    });

    if (detectionResults.length > 0) {
      const bestMatch = detectionResults.reduce((best, current) => 
        current.confidence > best.confidence ? current : best
      );

      setConfidence(bestMatch.confidence);

      if (bestMatch.confidence >= experiments[bestMatch.type].minConfidence) {
        handlePuzzleDetected(bestMatch.type, bestMatch.confidence);
      } else {
        setScanningStatus(`Analyzing ${experiments[bestMatch.type].name}... ${Math.round(bestMatch.confidence)}%`);
      }
    } else {
      setScanningStatus('Scanning for puzzles...');
      setConfidence(0);
    }
  }, [detectPuzzleType, handlePuzzleDetected]);

  const stopDetection = useCallback(() => {
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current);
      detectionIntervalRef.current = null;
    }
  }, []);

  const startAutomaticDetection = useCallback(() => {
    if (detectionIntervalRef.current) return;

    detectionIntervalRef.current = setInterval(() => {
      if (isScanning && !puzzleDetected && videoRef.current && canvasRef.current) {
        analyzeCameraFrame();
      }
    }, 500);
  }, [isScanning, puzzleDetected, analyzeCameraFrame]);

  const resetDetection = useCallback(() => {
    setPuzzleDetected(false);
    setDetectedPuzzle(null);
    setConfidence(0);
    setScanningStatus('Resuming scan...');

    if (overlayVideoRef.current) {
      overlayVideoRef.current.pause();
      overlayVideoRef.current.currentTime = 0;
    }

    setTimeout(() => {
      if (isScanning) {
        setScanningStatus('Scanning for puzzles...');
        startAutomaticDetection();
      }
    }, 2000);
  }, [isScanning, startAutomaticDetection]);

  const startCamera = useCallback(async () => {
    try {
      setScanningStatus('Accessing camera...');
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1280, min: 640 },
          height: { ideal: 720, min: 480 }
        }
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
          setIsScanning(true);
          setScanningStatus('Camera ready - Scanning for puzzles...');
          startAutomaticDetection();
        };
      }
    } catch (err) {
      setError('Camera access required. Please allow camera permissions and try again.');
      setScanningStatus('Camera access denied');
    }
  }, [startAutomaticDetection]);

  const stopCamera = useCallback(() => {
    if (videoRef.current?.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
    setIsScanning(false);
  }, []);

  // Initialize camera and start detection
  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
      stopDetection();
    };
  }, [startCamera, stopCamera, stopDetection]);

  const forceReset = () => {
    resetDetection();
  };

  if (error) {
    return (
      <div className="error-screen">
        <h2>📱 Camera Required</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="ar-scanner">
      <div className="scanner-header">
        <h1>🔬 Smart Physics AR Scanner</h1>
        <p>Automatic puzzle detection using AI vision</p>
        {detectedPuzzle && (
          <div className="detected-info">
            <h3>✨ Detected: {experiments[detectedPuzzle].name}</h3>
            <span className="confidence">Confidence: {Math.round(confidence)}%</span>
          </div>
        )}
      </div>

      <div className="camera-container">
        <video
          ref={videoRef}
          className="camera-feed"
          autoPlay
          playsInline
          muted
        />

        <canvas
          ref={canvasRef}
          style={{ display: 'none' }}
        />

        {puzzleDetected && detectedPuzzle && (
          <video
            ref={overlayVideoRef}
            className="ar-video-overlay"
            loop
            muted
            playsInline
          />
        )}

        <div className={`detection-frame ${puzzleDetected ? 'detected' : ''}`}>
          <div className="frame-corners"></div>
          <div className="detection-info">
            <p className="scan-status">{scanningStatus}</p>
            {confidence > 0 && !puzzleDetected && (
              <div className="confidence-bar">
                <div 
                  className="confidence-fill" 
                  style={{ width: `${Math.min(confidence, 100)}%` }}
                ></div>
                <span>{Math.round(confidence)}%</span>
              </div>
            )}
          </div>
        </div>

        <div className="status-overlay">
          <div className={puzzleDetected ? "status detected" : "status scanning"}>
            <span className="status-icon">
              {puzzleDetected ? '🎯' : '🔍'}
            </span>
            <span>{puzzleDetected ? 'AR Active' : 'AI Scanning'}</span>
          </div>
        </div>
      </div>

      <div className="scanner-controls">
        <button 
          className="reset-btn"
          onClick={forceReset}
          disabled={!isScanning}
        >
          🔄 Reset Scan
        </button>
        
        <div className="detection-status">
          <span className="status-text">{scanningStatus}</span>
        </div>
      </div>

      <div className="instructions">
        <h3>🤖 How AI Detection Works:</h3>
        <ol>
          <li><strong>🎨 Color Analysis:</strong> Detects dominant colors in puzzle</li>
          <li><strong>📐 Shape Recognition:</strong> Identifies geometric patterns</li>
          <li><strong>🔍 Pattern Matching:</strong> Recognizes physics diagram structures</li>
          <li><strong>🎯 Automatic Trigger:</strong> Plays AR video when confidence &gt; 70%</li>
          <li><strong>📱 Real-time Processing:</strong> Analyzes frames every 500ms</li>
        </ol>
        
        <div className="supported-puzzles">
          <h4>📋 Supported Puzzles:</h4>
          <div className="puzzle-list">
            {Object.entries(experiments).map(([key, exp]) => (
              <div key={key} className="puzzle-item">
                <span className="puzzle-name">{exp.name}</span>
                <span className="min-confidence">Min: {exp.minConfidence}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ARScanner;