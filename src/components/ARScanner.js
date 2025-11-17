import React, { useEffect, useRef, useState } from 'react';

function ARScanner() {
  const videoRef = useRef(null);
  const overlayVideoRef = useRef(null);
  const streamRef = useRef(null);
  
  const [cameraState, setCameraState] = useState('initializing');
  const [puzzleDetected, setPuzzleDetected] = useState(false);
  const [detectedPuzzle, setDetectedPuzzle] = useState(null);
  const [error, setError] = useState('');
  const [scanning, setScanning] = useState(false);
  const [arActive, setArActive] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Enhanced experiments with guaranteed visual content
  const experiments = {
    'convex-lens': {
      name: 'Convex Lens Experiment',
      video: '/videos/convex-lens.mp4',
      color: '#4285f4',
      icon: '🔍',
      description: 'Light focusing through convex lens',
      animation: 'lens'
    },
    'reflection': {
      name: 'Light Reflection', 
      video: '/videos/reflection.mp4',
      color: '#34a853',
      icon: '🪞',
      description: 'Light bouncing off mirror surface',
      animation: 'reflection'
    },
    'prism': {
      name: 'Light Dispersion',
      video: '/videos/prism.mp4',
      color: '#ea4335',
      icon: '🌈',
      description: 'White light splitting into spectrum',
      animation: 'prism'
    }
  };

  useEffect(() => {
    initializeCamera();
    return () => {
      cleanupCamera();
    };
  }, []);

  const initializeCamera = async () => {
    try {
      setCameraState('loading');
      console.log('🎥 Starting camera...');

      const constraints = {
        video: {
          facingMode: { ideal: 'environment' },
          width: { ideal: 1280, min: 320 },
          height: { ideal: 720, min: 240 }
        },
        audio: false
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play()
            .then(() => {
              console.log('✅ Camera ready');
              setCameraState('ready');
              setError('');
              
              setTimeout(() => {
                setScanning(true);
              }, 1000);
            })
            .catch(err => {
              console.error('❌ Camera play failed:', err);
              setCameraState('error');
              setError('Failed to start camera');
            });
        };
      }

    } catch (err) {
      console.error('❌ Camera failed:', err);
      setCameraState('error');
      setError('Camera access denied. Please allow permissions and refresh.');
    }
  };

  const cleanupCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setScanning(false);
    setArActive(false);
    setVideoPlaying(false);
  };

  const handleDetection = (puzzleType) => {
    console.log(`🎯 Activating AR for: ${puzzleType}`);
    
    setDetectedPuzzle(puzzleType);
    setPuzzleDetected(true);
    setScanning(false);
    setArActive(true);
    setVideoPlaying(false);

    // Try to load and play video with sound
    if (overlayVideoRef.current) {
      const experiment = experiments[puzzleType];
      overlayVideoRef.current.src = experiment.video;
      
      // Remove muted to allow sound
      overlayVideoRef.current.muted = false;
      overlayVideoRef.current.volume = 0.7;
      
      overlayVideoRef.current.onloadeddata = () => {
        console.log('📹 Video loaded, attempting play...');
        
        // Try to play with sound first
        overlayVideoRef.current.play()
          .then(() => {
            console.log('🔊 Video playing with sound!');
            setVideoPlaying(true);
          })
          .catch(() => {
            console.log('🔇 Retrying muted...');
            overlayVideoRef.current.muted = true;
            return overlayVideoRef.current.play();
          })
          .then(() => {
            if (overlayVideoRef.current.muted) {
              console.log('🔇 Video playing muted');
              setVideoPlaying(true);
            }
          })
          .catch(err => {
            console.warn('❌ Video play failed completely:', err);
            setVideoPlaying(false);
          });
      };

      overlayVideoRef.current.onerror = (e) => {
        console.warn('❌ Video load error:', e);
        setVideoPlaying(false);
      };

      // Fallback timeout
      setTimeout(() => {
        if (!videoPlaying) {
          console.log('⏰ Video timeout - using visual overlay only');
        }
      }, 3000);
    }

    // Auto reset after 15 seconds
    setTimeout(() => {
      resetDetection();
    }, 15000);
  };

  const resetDetection = () => {
    console.log('🔄 Resetting AR...');
    
    setPuzzleDetected(false);
    setDetectedPuzzle(null);
    setArActive(false);
    setVideoPlaying(false);
    
    if (overlayVideoRef.current) {
      overlayVideoRef.current.pause();
      overlayVideoRef.current.currentTime = 0;
      overlayVideoRef.current.src = '';
    }
    
    if (cameraState === 'ready') {
      setTimeout(() => {
        setScanning(true);
      }, 2000);
    }
  };

  const handleManualDetect = (puzzleType) => {
    handleDetection(puzzleType);
  };

  const toggleVideoSound = () => {
    if (overlayVideoRef.current) {
      overlayVideoRef.current.muted = !overlayVideoRef.current.muted;
      console.log(`🔊 Sound: ${overlayVideoRef.current.muted ? 'OFF' : 'ON'}`);
    }
  };

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
      </div>
    );
  }

  return (
    <div className="ar-scanner">
      <div className="scanner-header">
        <h1>🔬 Physics AR Scanner</h1>
        <div className="status-bar">
          <span className={`camera-status ${cameraState}`}>
            {cameraState === 'loading' && '📹 Loading...'}
            {cameraState === 'ready' && scanning && '🔍 Scanning...'}
            {arActive && '🎯 AR Active'}
          </span>
          
          {videoPlaying && (
            <button 
              className="sound-toggle"
              onClick={toggleVideoSound}
            >
              {overlayVideoRef.current?.muted ? '🔇' : '🔊'}
            </button>
          )}
        </div>
        
        {detectedPuzzle && (
          <div className="detected-info">
            <span className="puzzle-icon">{experiments[detectedPuzzle].icon}</span>
            <span className="puzzle-name">{experiments[detectedPuzzle].name}</span>
          </div>
        )}
      </div>

      <div className="camera-container">
        {/* Camera Feed */}
        <video
          ref={videoRef}
          className={`camera-feed ${cameraState === 'ready' ? 'ready' : ''}`}
          autoPlay
          playsInline
          muted
        />

        {/* Loading State */}
        {cameraState === 'loading' && (
          <div className="camera-loading">
            <div className="loading-spinner"></div>
            <p>Starting camera...</p>
          </div>
        )}

        {/* AR Overlay - Always Visible When Active */}
        {arActive && detectedPuzzle && (
          <div className="ar-overlay-main">
            {/* Background overlay with experiment color */}
            <div 
              className="ar-background"
              style={{ 
                background: `linear-gradient(45deg, ${experiments[detectedPuzzle].color}40, ${experiments[detectedPuzzle].color}80)`
              }}
            />

            {/* Video overlay (hidden if not playing) */}
            <video
              ref={overlayVideoRef}
              className={`ar-video ${videoPlaying ? 'playing' : 'hidden'}`}
              loop
              playsInline
            />

            {/* Always visible content overlay */}
            <div className="ar-content-overlay">
              <div className="ar-header">
                <span className="ar-icon">{experiments[detectedPuzzle].icon}</span>
                <h3>{experiments[detectedPuzzle].name}</h3>
              </div>

              <div className={`physics-demo ${experiments[detectedPuzzle].animation}`}>
                {experiments[detectedPuzzle].animation === 'lens' && (
                  <div className="lens-animation">
                    <div className="light-ray ray-1"></div>
                    <div className="light-ray ray-2"></div>
                    <div className="light-ray ray-3"></div>
                    <div className="lens-shape"></div>
                    <div className="focal-point"></div>
                  </div>
                )}

                {experiments[detectedPuzzle].animation === 'reflection' && (
                  <div className="reflection-animation">
                    <div className="incident-ray"></div>
                    <div className="reflected-ray"></div>
                    <div className="mirror-surface"></div>
                    <div className="normal-line"></div>
                  </div>
                )}

                {experiments[detectedPuzzle].animation === 'prism' && (
                  <div className="prism-animation">
                    <div className="white-light"></div>
                    <div className="prism-shape"></div>
                    <div className="spectrum">
                      <div className="color-ray red"></div>
                      <div className="color-ray orange"></div>
                      <div className="color-ray yellow"></div>
                      <div className="color-ray green"></div>
                      <div className="color-ray blue"></div>
                      <div className="color-ray violet"></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="ar-description">
                <p>{experiments[detectedPuzzle].description}</p>
                <div className="status-indicators">
                  <span className={`indicator ${arActive ? 'active' : ''}`}>🎯 AR</span>
                  <span className={`indicator ${videoPlaying ? 'active' : ''}`}>📹 Video</span>
                  <span className={`indicator ${overlayVideoRef.current?.muted === false ? 'active' : ''}`}>🔊 Audio</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Detection Frame */}
        <div className={`detection-frame ${arActive ? 'ar-active' : ''}`}>
          <div className="frame-corners"></div>
          {scanning && (
            <div className="scan-instruction">
              <p>🎯 Point camera at physics puzzle</p>
              <small>Or use test buttons below</small>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="scanner-controls">
        {cameraState === 'ready' && (
          <>
            <button 
              className="control-btn lens"
              onClick={() => handleManualDetect('convex-lens')}
              disabled={arActive}
            >
              🔍 Convex Lens
            </button>
            
            <button 
              className="control-btn reflection"
              onClick={() => handleManualDetect('reflection')}
              disabled={arActive}
            >
              🪞 Reflection
            </button>
            
            <button 
              className="control-btn prism"
              onClick={() => handleManualDetect('prism')}
              disabled={arActive}
            >
              🌈 Prism
            </button>
            
            <button 
              className="control-btn reset"
              onClick={resetDetection}
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
          AR: {arActive ? 'ON' : 'OFF'} | 
          Video: {videoPlaying ? 'PLAYING' : 'NOT PLAYING'} |
          Sound: {overlayVideoRef.current?.muted === false ? 'ON' : 'OFF'}
        </small>
      </div>
    </div>
  );
}

export default ARScanner;