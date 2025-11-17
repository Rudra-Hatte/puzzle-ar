import React, { useEffect, useRef, useState, useCallback } from 'react';

function ARScanner() {
  const videoRef = useRef(null);
  const overlayVideoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const detectionIntervalRef = useRef(null);
  
  const [cameraReady, setCameraReady] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [puzzleDetected, setPuzzleDetected] = useState(false);
  const [confidence, setConfidence] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

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
              setTimeout(() => {
                startDetection();
              }, 1000);
            });
        };
      }
    } catch (err) {
      console.error('❌ Camera failed:', err);
    }
  };

  const startDetection = useCallback(() => {
    console.log('🔍 Starting real-time detection...');
    setIsScanning(true);
    
    detectionIntervalRef.current = setInterval(() => {
      detectPuzzle();
    }, 300);
  }, []);

  const detectPuzzle = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (!video || !canvas || puzzleDetected) return;

    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const detectionScore = analyzeForConvexLens(ctx, canvas);
    setConfidence(detectionScore);

    if (detectionScore > 38) {
      console.log(`🎯 Convex lens detected! Confidence: ${detectionScore}%`);
      triggerAR();
    }
  }, [puzzleDetected]);

  const analyzeForConvexLens = (ctx, canvas) => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    let score = 0;
    
    score += detectCircularShapes(data, canvas.width, canvas.height) * 40;
    score += detectLightPatterns(data, canvas.width, canvas.height) * 35;
    score += detectLensColors(data, canvas.width, canvas.height) * 25;
    
    return Math.min(Math.round(score), 100);
  };

  const detectCircularShapes = (data, width, height) => {
    let circularPoints = 0;
    let totalPoints = 0;
    
    for (let y = 20; y < height - 20; y += 15) {
      for (let x = 20; x < width - 20; x += 15) {
        const idx = (y * width + x) * 4;
        const current = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
        
        let edgeCount = 0;
        const radius = 10;
        
        for (let angle = 0; angle < 360; angle += 45) {
          const rad = (angle * Math.PI) / 180;
          const checkX = Math.round(x + Math.cos(rad) * radius);
          const checkY = Math.round(y + Math.sin(rad) * radius);
          
          if (checkX >= 0 && checkX < width && checkY >= 0 && checkY < height) {
            const checkIdx = (checkY * width + checkX) * 4;
            const checkBrightness = (data[checkIdx] + data[checkIdx + 1] + data[checkIdx + 2]) / 3;
            
            if (Math.abs(current - checkBrightness) > 30) {
              edgeCount++;
            }
          }
        }
        
        totalPoints++;
        if (edgeCount >= 4 && edgeCount <= 6) {
          circularPoints++;
        }
      }
    }
    
    return totalPoints > 0 ? circularPoints / totalPoints : 0;
  };

  const detectLightPatterns = (data, width, height) => {
    let brightPoints = 0;
    let totalSamples = 0;
    
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 6;
    
    for (let y = centerY - radius; y < centerY + radius; y += 8) {
      for (let x = centerX - radius; x < centerX + radius; x += 8) {
        if (x >= 0 && x < width && y >= 0 && y < height) {
          const idx = (Math.floor(y) * width + Math.floor(x)) * 4;
          const brightness = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
          
          totalSamples++;
          
          if (brightness > 150) {
            brightPoints++;
          }
        }
      }
    }
    
    return totalSamples > 0 ? brightPoints / totalSamples : 0;
  };

  const detectLensColors = (data, width, height) => {
    let lensColorPoints = 0;
    let totalSamples = 0;
    
    for (let i = 0; i < data.length; i += 80) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      totalSamples++;
      
      if ((b > r + 20 && b > g + 10) || 
          (Math.abs(r - g) < 15 && Math.abs(g - b) < 15 && r > 100)) {
        lensColorPoints++;
      }
    }
    
    return totalSamples > 0 ? lensColorPoints / totalSamples : 0;
  };

  const triggerAR = () => {
    console.log('🚀 Triggering AR instantly!');
    
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current);
      detectionIntervalRef.current = null;
    }
    
    setIsScanning(false);
    setPuzzleDetected(true);
    setVideoError(false);
    
    playARVideo();
    
    setTimeout(() => {
      resetAR();
    }, 10000);
  };

  const playARVideo = () => {
    if (overlayVideoRef.current) {
      console.log('🎬 Attempting to play video...');
      
      // Clear any previous source
      overlayVideoRef.current.pause();
      overlayVideoRef.current.removeAttribute('src');
      overlayVideoRef.current.load();
      
      // Set video properties
      overlayVideoRef.current.crossOrigin = 'anonymous';
      overlayVideoRef.current.preload = 'auto';
      overlayVideoRef.current.muted = true;
      overlayVideoRef.current.loop = true;
      overlayVideoRef.current.playsInline = true;
      overlayVideoRef.current.autoplay = true;
      
      // Event handlers
      overlayVideoRef.current.onloadstart = () => {
        console.log('📥 Video loading started...');
      };
      
      overlayVideoRef.current.onloadeddata = () => {
        console.log('📊 Video data loaded');
      };
      
      overlayVideoRef.current.oncanplaythrough = () => {
        console.log('🎬 Video can play through, starting playback...');
        
        overlayVideoRef.current.play()
          .then(() => {
            console.log('✅ Video playing successfully!');
            setVideoPlaying(true);
            setVideoError(false);
          })
          .catch(err => {
            console.error('❌ Video play failed:', err);
            setVideoError(true);
            setVideoPlaying(false);
          });
      };
      
      overlayVideoRef.current.onerror = (e) => {
        console.error('❌ Video error:', e);
        console.log('🔄 Trying fallback approach...');
        setVideoError(true);
        setVideoPlaying(false);
      };
      
      overlayVideoRef.current.ontimeupdate = () => {
        if (!videoPlaying) {
          setVideoPlaying(true);
          console.log('🎉 Video confirmed playing via timeupdate');
        }
      };
      
      // Try multiple video sources
      const videoSources = [
        'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        'https://www.w3schools.com/html/mov_bbb.mp4',
        '/videos/convex-lens.mp4'
      ];
      
      let sourceIndex = 0;
      
      const tryNextSource = () => {
        if (sourceIndex < videoSources.length) {
          const source = videoSources[sourceIndex];
          console.log(`🔗 Trying video source ${sourceIndex + 1}: ${source}`);
          overlayVideoRef.current.src = source;
          overlayVideoRef.current.load();
          sourceIndex++;
        } else {
          console.log('❌ All video sources failed');
          setVideoError(true);
          setVideoPlaying(false);
        }
      };
      
      overlayVideoRef.current.onerror = () => {
        console.log(`❌ Source ${sourceIndex} failed, trying next...`);
        setTimeout(tryNextSource, 1000);
      };
      
      // Set timeout for each source
      const sourceTimeout = setTimeout(() => {
        if (!videoPlaying) {
          console.log(`⏰ Source ${sourceIndex} timeout, trying next...`);
          tryNextSource();
        }
      }, 3000);
      
      overlayVideoRef.current.onloadeddata = () => {
        clearTimeout(sourceTimeout);
        overlayVideoRef.current.play()
          .then(() => {
            setVideoPlaying(true);
            setVideoError(false);
            console.log('✅ Video playing!');
          })
          .catch(() => {
            tryNextSource();
          });
      };
      
      // Start with first source
      tryNextSource();
    }
  };

  const resetAR = () => {
    console.log('🔄 Resetting to scan mode...');
    
    setPuzzleDetected(false);
    setVideoPlaying(false);
    setVideoError(false);
    setConfidence(0);
    
    if (overlayVideoRef.current) {
      overlayVideoRef.current.pause();
      overlayVideoRef.current.src = '';
    }
    
    setTimeout(() => {
      if (cameraReady) {
        startDetection();
      }
    }, 2000);
  };

  const cleanup = () => {
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current);
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ 
          fontSize: '1.8rem', 
          background: 'linear-gradient(45deg, #00ff88, #00cc6a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>
          🔬 Smart Lens Detector
        </h1>
        
        <div style={{ 
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          backgroundColor: isScanning ? 'rgba(0, 255, 136, 0.2)' : puzzleDetected ? 'rgba(255, 215, 0, 0.2)' : 'rgba(100, 150, 255, 0.2)',
          color: isScanning ? '#00ff88' : puzzleDetected ? '#ffd700' : '#6496ff',
          border: `2px solid ${isScanning ? '#00ff88' : puzzleDetected ? '#ffd700' : '#6496ff'}`,
          display: 'inline-block'
        }}>
          {isScanning && '🔍 AI Scanning...'}
          {puzzleDetected && '🎯 Lens Detected!'}
          {!isScanning && !puzzleDetected && '📹 Starting...'}
        </div>

        {isScanning && confidence > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <div style={{
              width: '200px',
              height: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '4px',
              margin: '0 auto',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${confidence}%`,
                height: '100%',
                backgroundColor: confidence > 38 ? '#00ff88' : '#ffa500',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }} />
            </div>
            <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
              Detection: {confidence}% {confidence > 38 && '🎯 TRIGGER!'}
            </p>
          </div>
        )}
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        backgroundColor: '#000',
        borderRadius: '20px',
        overflow: 'hidden',
        marginBottom: '1.5rem',
        border: puzzleDetected ? '4px solid #00ff88' : isScanning ? '2px solid #6496ff' : '2px solid #666'
      }}>
        
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

        <canvas ref={canvasRef} style={{ display: 'none' }} />

        {puzzleDetected && (
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '80%',
            height: '80%',
            borderRadius: '15px',
            border: '3px solid #ffd700',
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.8)',
            overflow: 'hidden',
            zIndex: 10,
            backgroundColor: '#000'
          }}>
            
            {/* Video element with better styling */}
            <video
              ref={overlayVideoRef}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                backgroundColor: '#000',
                display: videoPlaying && !videoError ? 'block' : 'none'
              }}
              playsInline
              muted
              loop
            />

            {/* Show loading/error state */}
            {(!videoPlaying || videoError) && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white'
              }}>
                {videoError ? (
                  <div>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎬</div>
                    <h3>Physics Demo Active!</h3>
                    <p>Convex Lens Experiment</p>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      border: '4px solid #ffd700',
                      borderRadius: '50%',
                      margin: '1rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      animation: 'pulse 2s infinite'
                    }}>
                      🔍
                    </div>
                  </div>
                ) : (
                  <div>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      border: '4px solid rgba(255, 255, 255, 0.3)',
                      borderTop: '4px solid #ffd700',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                      margin: '0 auto 1rem auto'
                    }} />
                    <p>Loading AR Video...</p>
                  </div>
                )}
              </div>
            )}

            <div style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              backgroundColor: 'rgba(255, 215, 0, 0.9)',
              color: '#000',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              🔍 Convex Lens AR
            </div>

            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '0.3rem 0.8rem',
              borderRadius: '15px',
              fontSize: '0.8rem'
            }}>
              {videoPlaying ? '📹 Playing' : videoError ? '🎨 Demo' : '⏳ Loading'}
            </div>
          </div>
        )}

        {isScanning && !puzzleDetected && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            height: '60%',
            border: '2px dashed #00ff88',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'pulse 2s infinite'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1rem', margin: '0' }}>🔍 Point at convex lens</p>
              <small style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Need 38%+ confidence to trigger</small>
            </div>
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button
          onClick={resetAR}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '15px',
            background: 'linear-gradient(45deg, #9aa0a6, #c4cace)',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
          }}
        >
          🔄 Reset Scanner
        </button>
      </div>

      <div style={{
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: '0.8rem',
        opacity: 0.7,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: '0.5rem',
        borderRadius: '10px'
      }}>
        Scanning: {isScanning ? 'ON' : 'OFF'} | 
        Detected: {puzzleDetected ? 'YES' : 'NO'} | 
        Confidence: {confidence}% |
        Video: {videoPlaying ? 'PLAYING' : videoError ? 'DEMO MODE' : 'LOADING'}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default ARScanner;