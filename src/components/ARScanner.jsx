import React, { useEffect, useRef, useState } from 'react';

function ARScanner() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayVideoRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);
  const [puzzleDetected, setPuzzleDetected] = useState(false);
  const [error, setError] = useState(null);
  const [currentExperiment, setCurrentExperiment] = useState('convex-lens');

  // Available experiments
  const experiments = {
    'convex-lens': {
      name: 'Light Through Convex Lens',
      video: '/videos/convex-lens.mp4'
    },
    'reflection': {
      name: 'Light Reflection',
      video: '/videos/reflection.mp4'
    },
    'prism': {
      name: 'Light Dispersion',
      video: '/videos/prism.mp4'
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment', // Back camera
          width: { ideal: 1280, min: 640 },
          height: { ideal: 720, min: 480 }
        }
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsScanning(true);
      }
    } catch (err) {
      setError('Camera access required. Please allow camera permissions and try again.');
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
    setIsScanning(false);
  };

  const detectPuzzle = () => {
    // Simulate puzzle detection (in real app, this would use computer vision)
    if (!puzzleDetected) {
      setPuzzleDetected(true);
      
      // Start the overlay video
      if (overlayVideoRef.current) {
        overlayVideoRef.current.play();
      }
      
      // Auto-hide after 20 seconds for demo
      setTimeout(() => {
        setPuzzleDetected(false);
        if (overlayVideoRef.current) {
          overlayVideoRef.current.pause();
          overlayVideoRef.current.currentTime = 0;
        }
      }, 20000);
    }
  };

  const handleExperimentChange = (experiment) => {
    setCurrentExperiment(experiment);
    
    // Reset detection
    setPuzzleDetected(false);
    if (overlayVideoRef.current) {
      overlayVideoRef.current.pause();
      overlayVideoRef.current.currentTime = 0;
    }
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
      {/* Header */}
      <div className="scanner-header">
        <h1>🔬 Physics AR Scanner</h1>
        <p>Point camera at your completed puzzle</p>
      </div>

      {/* Experiment Selector */}
      <div className="experiment-selector">
        <label>Select Experiment:</label>
        <select 
          value={currentExperiment} 
          onChange={(e) => handleExperimentChange(e.target.value)}
        >
          {Object.entries(experiments).map(([key, exp]) => (
            <option key={key} value={key}>{exp.name}</option>
          ))}
        </select>
      </div>

      {/* Camera View */}
      <div className="camera-container">
        {/* Live camera feed */}
        <video
          ref={videoRef}
          className="camera-feed"
          autoPlay
          playsInline
          muted
        />

        {/* AR Video Overlay */}
        {puzzleDetected && (
          <video
            ref={overlayVideoRef}
            className="ar-video-overlay"
            src={experiments[currentExperiment].video}
            loop
            muted
            playsInline
          />
        )}

        {/* Detection Frame */}
        <div className="detection-frame">
          <div className="frame-corners"></div>
          <p>Position puzzle within frame</p>
        </div>

        {/* Status Overlay */}
        <div className="status-overlay">
          {puzzleDetected ? (
            <div className="detected">
              <span className="status-icon">🎯</span>
              <span>Puzzle Detected!</span>
            </div>
          ) : (
            <div className="scanning">
              <span className="status-icon">📡</span>
              <span>Scanning for puzzle...</span>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="scanner-controls">
        <button 
          className="detect-btn"
          onClick={detectPuzzle}
          disabled={!isScanning}
        >
          🎯 Detect Puzzle
        </button>
        
        <button 
          className="stop-btn"
          onClick={() => setPuzzleDetected(false)}
          disabled={!puzzleDetected}
        >
          ⏹️ Stop AR
        </button>
      </div>

      {/* Instructions */}
      <div className="instructions">
        <h3>📋 Instructions:</h3>
        <ol>
          <li>Complete your physics puzzle physically</li>
          <li>Select the matching experiment above</li>
          <li>Point camera at the completed puzzle</li>
          <li>Tap "Detect Puzzle" when puzzle is in frame</li>
          <li>Video will play on the puzzle surface!</li>
          <li>Move your phone around for 3D AR effect</li>
        </ol>
      </div>
    </div>
  );
}

export default ARScanner;