import React, { useEffect, useRef, useState } from 'react';

function ARScanner() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayVideoRef = useRef(null);
  const streamRef = useRef(null);
  
  const [cameraState, setCameraState] = useState('initializing');
  const [puzzleDetected, setPuzzleDetected] = useState(false);
  const [detectedPuzzle, setDetectedPuzzle] = useState(null);
  const [error, setError] = useState('');
  const [scanning, setScanning] = useState(false);
  const [arVideoError, setArVideoError] = useState(false);

  // Use placeholder videos or solid colors for testing
  const experiments = {
    'convex-lens': {
      name: 'Convex Lens',
      video: '/videos/convex-lens.mp4',
      fallback: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      color: '#4285f4' // Blue
    },
    'reflection': {
      name: 'Light Reflection', 
      video: '/videos/reflection.mp4',
      fallback: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      color: '#34a853' // Green
    },
    'prism': {
      name: 'Prism Dispersion',
      video: '/videos/prism.mp4',
      fallback: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      color: '#ea4335' // Red
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
    setArVideoError(false);
    
    // Try to play AR video with fallbacks
    if (overlayVideoRef.current) {
      const experiment = experiments[puzzleType];
      
      // First try the main video
      overlayVideoRef.current.src = experiment.video;
      
      overlayVideoRef.current.onloadeddata = () => {
        console.log('🎬 AR video loaded successfully');
        overlayVideoRef.current.play().catch(err => {
          console.warn('⚠️ Main AR video play failed, trying fallback:', err);
          tryFallbackVideo(puzzleType);
        });
      };
      
      overlayVideoRef.current.onerror = () => {
        console.warn('⚠️ Main AR video failed to load, trying fallback');
        tryFallbackVideo(puzzleType);
      };
      
      // Set timeout to try fallback if main video doesn't load
      setTimeout(() => {
        if (overlayVideoRef.current && overlayVideoRef.current.readyState === 0) {
          console.log('🕐 Video loading timeout, trying fallback');
          tryFallbackVideo(puzzleType);
        }
      }, 3000);
    }
    
    // Reset after 15 seconds
    setTimeout(() => {
      resetDetection();
    }, 15000);
  };

  const tryFallbackVideo = (puzzleType) => {
    const experiment = experiments[puzzleType];
    
    if (overlayVideoRef.current) {
      console.log(`🔄 Trying fallback video for ${puzzleType}`);
      overlayVideoRef.current.src = experiment.fallback;
      
      overlayVideoRef.current.onloadeddata = () => {
        console.log('✅ Fallback video loaded');
        overlayVideoRef.current.play().catch(err => {
          console.warn('⚠️ Fallback video failed, showing color overlay:', err);
          showColorOverlay(puzzleType);
        });
      };
      
      overlayVideoRef.current.onerror = () => {
        console.warn('⚠️ Fallback video failed, showing color overlay');
        showColorOverlay(puzzleType);
      };
    }
  };

  const showColorOverlay = (puzzleType) => {
    console.log(`🎨 Showing color overlay for ${puzzleType}`);
    setArVideoError(true);
  };

  const resetDetection = () => {
    console.log('🔄 Resetting detection...');
    
    setPuzzleDetected(false);
    setDetectedPuzzle(null);
    setArVideoError(false);
    
    if (overlayVideoRef.current) {
      overlayVideoRef.current.pause();
      overlayVideoRef.current.currentTime = 0;
      overlayVideoRef.current.src = '';
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

        {/* AR Overlays */}
        {puzzleDetected && detectedPuzzle && (
          <div className="ar-overlay-container">
            {/* Video Overlay */}
            {!arVideoError && (
              <video
                ref={overlayVideoRef}
                className="ar-video-overlay"
                loop
                muted
                playsInline
                controls={false}
              />
            )}
            
            {/* Color Fallback Overlay */}
            {arVideoError && (
              <div 
                className="ar-color-overlay"
                style={{ backgroundColor: experiments[detectedPuzzle].color }}
              >
                <div className="ar-content">
                  <h3>🔬 {experiments[detectedPuzzle].name}</h3>
                  <div className="physics-animation">
                    <div className="pulse-circle"></div>
                    <div className="rotating-ring"></div>
                  </div>
                  <p>Physics demonstration active!</p>
                  <small>(Video unavailable - showing interactive AR)</small>
                </div>
              </div>
            )}
            
            {/* AR Info Badge */}
            <div className="ar-info-badge">
              <span>🎯 AR Active</span>
              <small>{experiments[detectedPuzzle].name}</small>
            </div>
          </div>
        )}

        {/* Detection Frame */}
        <div className={`detection-frame ${puzzleDetected ? 'detected' : ''}`}>
          <div className="frame-corners"></div>
          {scanning && <p>🎯 Point at your puzzle</p>}
          {puzzleDetected && <p>🎬 AR Experience Active</p>}
        </div>

        {/* Status Indicator */}
        <div className="status-indicator">
          <div className={`status ${cameraState} ${puzzleDetected ? 'detected' : ''}`}>
            {cameraState === 'loading' && '⏳ Loading'}
            {cameraState === 'ready' && !puzzleDetected && '📡 Scanning'}
            {puzzleDetected && '🎯 AR Active'}
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
          Detected: {puzzleDetected ? detectedPuzzle : 'None'} |
          Video Error: {arVideoError ? 'Yes' : 'No'}
        </small>
      </div>
    </div>
  );
}

export default ARScanner;