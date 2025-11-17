import React, { useEffect, useRef, useState } from 'react';

function ARScanner() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayVideoRef = useRef(null);
  const streamRef = useRef(null);
  
  const [cameraState, setCameraState] = useState('initializing'); // initializing, loading, ready, error
  const [puzzleDetected, setPuzzleDetected] = useState(false);
  const [detectedPuzzle, setDetectedPuzzle] = useState(null);
  const [error, setError] = useState('');
  const [scanning, setScanning] = useState(false);

  // Simplified experiments for testing
  const experiments = {
    'convex-lens': {
      name: 'Convex Lens',
      video: '/videos/convex-lens.mp4'
    },
    'reflection': {
      name: 'Light Reflection', 
      video: '/videos/reflection.mp4'
    },
    'prism': {
      name: 'Prism Dispersion',
      video: '/videos/prism.mp4'
    }
  };

  // Initialize camera on component mount
  useEffect(() => {
    initializeCamera();
    
    // Cleanup on unmount
    return () => {
      cleanupCamera();
    };
  }, []);

  const initializeCamera = async () => {
    try {
      setCameraState('loading');
      console.log('🎥 Requesting camera access...');

      // Check if browser supports getUserMedia
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera not supported by this browser');
      }

      // Request camera with fallback options
      const constraints = {
        video: {
          facingMode: { ideal: 'environment' }, // Prefer back camera
          width: { ideal: 1280, min: 320 },
          height: { ideal: 720, min: 240 }
        },
        audio: false
      };

      console.log('📱 Getting media stream...');
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      streamRef.current = stream;
      
      if (videoRef.current) {
        console.log('🎬 Setting video source...');
        videoRef.current.srcObject = stream;
        
        // Wait for video to load
        videoRef.current.onloadedmetadata = () => {
          console.log('✅ Video metadata loaded');
          videoRef.current.play()
            .then(() => {
              console.log('▶️ Video playing successfully');
              setCameraState('ready');
              setError('');
              
              // Start detection after camera is ready
              setTimeout(() => {
                setScanning(true);
                startDetection();
              }, 1000);
            })
            .catch(err => {
              console.error('❌ Video play failed:', err);
              setError('Failed to start camera playback');
              setCameraState('error');
            });
        };

        videoRef.current.onerror = (e) => {
          console.error('❌ Video error:', e);
          setError('Video stream error');
          setCameraState('error');
        };
      }

    } catch (err) {
      console.error('❌ Camera initialization failed:', err);
      let errorMessage = 'Camera access failed. ';
      
      if (err.name === 'NotAllowedError') {
        errorMessage += 'Please allow camera permissions and refresh the page.';
      } else if (err.name === 'NotFoundError') {
        errorMessage += 'No camera found on this device.';
      } else if (err.name === 'NotSupportedError') {
        errorMessage += 'Camera not supported by this browser.';
      } else {
        errorMessage += err.message || 'Unknown camera error.';
      }
      
      setError(errorMessage);
      setCameraState('error');
    }
  };

  const cleanupCamera = () => {
    console.log('🧹 Cleaning up camera...');
    
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => {
        track.stop();
        console.log('⏹️ Camera track stopped');
      });
      streamRef.current = null;
    }
    
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    
    setScanning(false);
    setCameraState('initializing');
  };

  const startDetection = () => {
    console.log('🔍 Starting puzzle detection...');
    // Simple detection - just check if camera is working
    setTimeout(() => {
      if (cameraState === 'ready' && scanning) {
        console.log('🎯 Simulating puzzle detection...');
        // For testing, auto-detect after 3 seconds
        simulateDetection();
      }
    }, 3000);
  };

  const simulateDetection = () => {
    const puzzleTypes = Object.keys(experiments);
    const randomPuzzle = puzzleTypes[Math.floor(Math.random() * puzzleTypes.length)];
    
    console.log(`🎲 Simulated detection: ${randomPuzzle}`);
    handleDetection(randomPuzzle);
  };

  const handleDetection = (puzzleType) => {
    console.log(`✨ Puzzle detected: ${puzzleType}`);
    
    setDetectedPuzzle(puzzleType);
    setPuzzleDetected(true);
    setScanning(false);
    
    // Play AR video
    if (overlayVideoRef.current) {
      overlayVideoRef.current.src = experiments[puzzleType].video;
      overlayVideoRef.current.play().catch(err => {
        console.warn('⚠️ AR video play failed:', err);
      });
    }
    
    // Reset after 10 seconds
    setTimeout(() => {
      resetDetection();
    }, 10000);
  };

  const resetDetection = () => {
    console.log('🔄 Resetting detection...');
    
    setPuzzleDetected(false);
    setDetectedPuzzle(null);
    
    if (overlayVideoRef.current) {
      overlayVideoRef.current.pause();
      overlayVideoRef.current.currentTime = 0;
    }
    
    // Restart scanning if camera is ready
    if (cameraState === 'ready') {
      setTimeout(() => {
        setScanning(true);
        startDetection();
      }, 2000);
    }
  };

  const handleManualDetect = (puzzleType) => {
    handleDetection(puzzleType);
  };

  // Render different states
  if (cameraState === 'error') {
    return (
      <div className="error-screen">
        <h2>📱 Camera Issue</h2>
        <p>{error}</p>
        <div className="error-actions">
          <button onClick={() => window.location.reload()}>
            🔄 Refresh Page
          </button>
          <button onClick={initializeCamera}>
            📹 Retry Camera
          </button>
        </div>
        <div className="help-text">
          <h4>Troubleshooting:</h4>
          <ul>
            <li>Allow camera permissions</li>
            <li>Use Chrome or Safari browser</li>
            <li>Ensure good lighting</li>
            <li>Try refreshing the page</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="ar-scanner">
      <div className="scanner-header">
        <h1>🔬 Physics AR Scanner</h1>
        <p>
          {cameraState === 'loading' && '📹 Initializing camera...'}
          {cameraState === 'ready' && scanning && '🔍 Scanning for puzzles...'}
          {cameraState === 'ready' && !scanning && '⏸️ Detection paused'}
          {puzzleDetected && `✨ Detected: ${experiments[detectedPuzzle]?.name}`}
        </p>
      </div>

      <div className="camera-container">
        {/* Camera Feed */}
        <video
          ref={videoRef}
          className={`camera-feed ${cameraState === 'ready' ? 'ready' : ''}`}
          autoPlay
          playsInline
          muted
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            backgroundColor: '#000',
            borderRadius: '10px'
          }}
        />

        {/* Hidden canvas for image processing */}
        <canvas
          ref={canvasRef}
          style={{ display: 'none' }}
        />

        {/* Loading Overlay */}
        {cameraState === 'loading' && (
          <div className="camera-loading">
            <div className="loading-spinner"></div>
            <p>Starting camera...</p>
          </div>
        )}

        {/* AR Video Overlay */}
        {puzzleDetected && detectedPuzzle && (
          <video
            ref={overlayVideoRef}
            className="ar-video-overlay"
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '70%',
              borderRadius: '10px',
              border: '3px solid #00ff88',
              boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
              zIndex: 10
            }}
          />
        )}

        {/* Detection Frame */}
        <div className={`detection-frame ${puzzleDetected ? 'detected' : ''}`}>
          <div className="frame-corners"></div>
          {scanning && <p>🎯 Point at your puzzle</p>}
          {puzzleDetected && <p>🎬 AR Video Playing</p>}
        </div>

        {/* Status Indicator */}
        <div className="status-indicator">
          <div className={`status ${cameraState} ${puzzleDetected ? 'detected' : ''}`}>
            {cameraState === 'loading' && '⏳ Loading'}
            {cameraState === 'ready' && !puzzleDetected && '📡 Scanning'}
            {puzzleDetected && '🎯 Detected'}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="scanner-controls">
        {cameraState === 'ready' && (
          <>
            <button 
              className="control-btn primary"
              onClick={() => handleManualDetect('convex-lens')}
              disabled={puzzleDetected}
            >
              🔍 Test Lens
            </button>
            
            <button 
              className="control-btn primary"
              onClick={() => handleManualDetect('reflection')}
              disabled={puzzleDetected}
            >
              🪞 Test Mirror
            </button>
            
            <button 
              className="control-btn primary"
              onClick={() => handleManualDetect('prism')}
              disabled={puzzleDetected}
            >
              🌈 Test Prism
            </button>
            
            <button 
              className="control-btn secondary"
              onClick={resetDetection}
              disabled={cameraState !== 'ready'}
            >
              🔄 Reset
            </button>
          </>
        )}
      </div>

      {/* Debug Info */}
      <div className="debug-info">
        <small>
          Camera: {cameraState} | 
          Scanning: {scanning ? 'Yes' : 'No'} | 
          Detected: {puzzleDetected ? detectedPuzzle : 'None'}
        </small>
      </div>
    </div>
  );
}

export default ARScanner;