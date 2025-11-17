import React, { useEffect, useRef, useState } from 'react';

function ARScanner() {
  const videoRef = useRef(null);
  const overlayVideoRef = useRef(null);
  const streamRef = useRef(null);
  
  const [cameraReady, setCameraReady] = useState(false);
  const [arActive, setArActive] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    startCamera();
    return () => {
      cleanup();
    };
  }, []);

  const startCamera = async () => {
    try {
      console.log('🎥 Starting camera...');
      
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });

      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play()
            .then(() => {
              console.log('✅ Camera ready');
              setCameraReady(true);
            })
            .catch(err => {
              console.error('❌ Camera failed:', err);
              setError('Camera failed to start');
            });
        };
      }
    } catch (err) {
      console.error('❌ Camera access failed:', err);
      setError('Camera access denied');
    }
  };

  const cleanup = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const startConvexLensAR = () => {
    console.log('🔍 Starting Convex Lens AR...');
    setArActive(true);
    setVideoLoaded(false);
    setVideoPlaying(false);

    if (overlayVideoRef.current) {
      // Clear any previous source
      overlayVideoRef.current.src = '';
      overlayVideoRef.current.load();

      // Set up event handlers
      overlayVideoRef.current.onloadstart = () => {
        console.log('📥 Video loading...');
      };

      overlayVideoRef.current.onloadeddata = () => {
        console.log('📊 Video data loaded');
        setVideoLoaded(true);
      };

      overlayVideoRef.current.oncanplay = () => {
        console.log('🎬 Video can play, starting...');
        
        overlayVideoRef.current.muted = true; // Start muted to avoid autoplay issues
        overlayVideoRef.current.play()
          .then(() => {
            console.log('✅ Video playing!');
            setVideoPlaying(true);
          })
          .catch(err => {
            console.error('❌ Video play failed:', err);
            // Try with local file fallback
            tryLocalVideo();
          });
      };

      overlayVideoRef.current.onerror = (e) => {
        console.error('❌ Video error:', e);
        tryLocalVideo();
      };

      // Try the external video first
      overlayVideoRef.current.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    }
  };

  const tryLocalVideo = () => {
    console.log('🔄 Trying local video...');
    
    if (overlayVideoRef.current) {
      // Reset handlers
      overlayVideoRef.current.onloadeddata = () => {
        console.log('📊 Local video loaded');
        setVideoLoaded(true);
      };

      overlayVideoRef.current.oncanplay = () => {
        console.log('🎬 Local video can play');
        
        overlayVideoRef.current.muted = true;
        overlayVideoRef.current.play()
          .then(() => {
            console.log('✅ Local video playing!');
            setVideoPlaying(true);
          })
          .catch(err => {
            console.error('❌ Local video failed:', err);
            setVideoPlaying(false);
          });
      };

      // Try your local video file
      overlayVideoRef.current.src = '/videos/convex-lens.mp4';
    }
  };

  const resetAR = () => {
    console.log('🔄 Resetting AR...');
    setArActive(false);
    setVideoLoaded(false);
    setVideoPlaying(false);

    if (overlayVideoRef.current) {
      overlayVideoRef.current.pause();
      overlayVideoRef.current.currentTime = 0;
      overlayVideoRef.current.src = '';
    }
  };

  const toggleSound = () => {
    if (overlayVideoRef.current && videoPlaying) {
      overlayVideoRef.current.muted = !overlayVideoRef.current.muted;
      console.log(`🔊 Sound: ${overlayVideoRef.current.muted ? 'OFF' : 'ON'}`);
    }
  };

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: '50vh',
        padding: '2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2>📱 Camera Error</h2>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#00ff88',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          🔄 Refresh Page
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ 
          fontSize: '2rem', 
          background: 'linear-gradient(45deg, #00ff88, #00cc6a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>
          🔬 Convex Lens AR
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            backgroundColor: cameraReady ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 165, 0, 0.2)',
            color: cameraReady ? '#00ff88' : '#ffa500',
            border: `2px solid ${cameraReady ? '#00ff88' : '#ffa500'}`
          }}>
            {cameraReady ? '🎯 Camera Ready' : '📹 Starting Camera...'}
          </span>

          {arActive && videoPlaying && (
            <button 
              onClick={toggleSound}
              style={{
                padding: '0.5rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                fontSize: '1.2rem'
              }}
            >
              {overlayVideoRef.current?.muted ? '🔇' : '🔊'}
            </button>
          )}
        </div>

        {arActive && (
          <div style={{ 
            marginTop: '1rem', 
            padding: '1rem', 
            backgroundColor: 'rgba(0, 255, 136, 0.15)',
            border: '2px solid #00ff88',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>🔍</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Convex Lens Experiment</span>
            <span style={{
              padding: '0.25rem 0.5rem',
              borderRadius: '10px',
              fontSize: '0.8rem',
              backgroundColor: videoPlaying ? 'rgba(0, 255, 136, 0.3)' : 'rgba(100, 150, 255, 0.3)',
              color: videoPlaying ? '#00ff88' : '#6496ff',
              border: `1px solid ${videoPlaying ? '#00ff88' : '#6496ff'}`
            }}>
              {videoPlaying ? '📹 Video Active' : videoLoaded ? '⏳ Loading...' : '📥 Preparing...'}
            </span>
          </div>
        )}
      </div>

      {/* Camera Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        backgroundColor: '#000',
        borderRadius: '20px',
        overflow: 'hidden',
        marginBottom: '2rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}>
        
        {/* Camera Feed */}
        <video
          ref={videoRef}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundColor: '#000'
          }}
          autoPlay
          playsInline
          muted
        />

        {/* AR Video Overlay */}
        {arActive && (
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '80%',
            height: '80%',
            borderRadius: '15px',
            border: '4px solid #00ff88',
            boxShadow: '0 0 30px rgba(0, 255, 136, 0.6)',
            overflow: 'hidden',
            zIndex: 10,
            backgroundColor: '#000'
          }}>
            
            {/* Video Element */}
            <video
              ref={overlayVideoRef}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                backgroundColor: '#000',
                display: videoPlaying ? 'block' : 'none'
              }}
              loop
              playsInline
            />

            {/* Loading State */}
            {arActive && !videoPlaying && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  border: '4px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '4px solid #00ff88',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto 1rem auto'
                }} />
                <p>Loading Convex Lens Video...</p>
                <small>Please wait...</small>
              </div>
            )}

            {/* Info Badge */}
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>🔍</span>
              <span>Convex Lens</span>
              <span style={{ fontSize: '0.8rem' }}>
                {videoPlaying ? '📹' : '⏳'}
              </span>
            </div>

          </div>
        )}

        {/* Detection Frame */}
        {!arActive && cameraReady && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '70%',
            border: '2px dashed rgba(100, 150, 255, 0.6)',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 5
          }}>
            <div>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>🎯 Ready to Scan</p>
              <small style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Click "Start AR" below</small>
            </div>
          </div>
        )}

      </div>

      {/* Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        
        {cameraReady && !arActive && (
          <button
            onClick={startConvexLensAR}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '15px',
              background: 'linear-gradient(45deg, #4285f4, #6fa8ff)',
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            🔍 Start Convex Lens AR
          </button>
        )}

        {arActive && (
          <button
            onClick={resetAR}
            style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '15px',
              background: 'linear-gradient(45deg, #9aa0a6, #c4cace)',
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
            }}
          >
            🔄 Stop AR
          </button>
        )}
      </div>

      {/* Debug Info */}
      <div style={{
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: '0.8rem',
        opacity: 0.7,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: '0.5rem',
        borderRadius: '10px'
      }}>
        Camera: {cameraReady ? 'READY' : 'LOADING'} | 
        AR: {arActive ? 'ACTIVE' : 'INACTIVE'} | 
        Video: {videoPlaying ? 'PLAYING' : videoLoaded ? 'LOADED' : 'NOT LOADED'}
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default ARScanner;