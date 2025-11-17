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
              // Start scanning immediately
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
    
    // Detect every 300ms for fast response
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

    // Capture current frame
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Detect convex lens patterns
    const detectionScore = analyzeForConvexLens(ctx, canvas);
    setConfidence(detectionScore);

    // Trigger AR if confidence > 60%
    if (detectionScore > 60) {
      console.log(`🎯 Convex lens detected! Confidence: ${detectionScore}%`);
      triggerAR();
    }
  }, [puzzleDetected]);

  const analyzeForConvexLens = (ctx, canvas) => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    let score = 0;
    
    // 1. Look for circular/oval shapes (lens outline)
    score += detectCircularShapes(data, canvas.width, canvas.height) * 40;
    
    // 2. Look for light convergence patterns
    score += detectLightPatterns(data, canvas.width, canvas.height) * 35;
    
    // 3. Look for specific colors (clear/blue lens)
    score += detectLensColors(data, canvas.width, canvas.height) * 25;
    
    return Math.min(Math.round(score), 100);
  };

  const detectCircularShapes = (data, width, height) => {
    let circularPoints = 0;
    let totalPoints = 0;
    
    // Sample points in a grid
    for (let y = 20; y < height - 20; y += 15) {
      for (let x = 20; x < width - 20; x += 15) {
        const idx = (y * width + x) * 4;
        const current = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
        
        // Check surrounding pixels for circular patterns
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
        if (edgeCount >= 4 && edgeCount <= 6) { // Circular edge pattern
          circularPoints++;
        }
      }
    }
    
    return totalPoints > 0 ? circularPoints / totalPoints : 0;
  };

  const detectLightPatterns = (data, width, height) => {
    let brightPoints = 0;
    let totalSamples = 0;
    
    // Look for light convergence in center area
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 6;
    
    for (let y = centerY - radius; y < centerY + radius; y += 8) {
      for (let x = centerX - radius; x < centerX + radius; x += 8) {
        if (x >= 0 && x < width && y >= 0 && y < height) {
          const idx = (Math.floor(y) * width + Math.floor(x)) * 4;
          const brightness = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
          
          totalSamples++;
          
          // Look for bright spots (light convergence)
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
    
    // Sample every 20th pixel
    for (let i = 0; i < data.length; i += 80) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      totalSamples++;
      
      // Look for clear/transparent lens colors (bluish, clear)
      if ((b > r + 20 && b > g + 10) || // Bluish tint
          (Math.abs(r - g) < 15 && Math.abs(g - b) < 15 && r > 100)) { // Clear/bright
        lensColorPoints++;
      }
    }
    
    return totalSamples > 0 ? lensColorPoints / totalSamples : 0;
  };

  const triggerAR = () => {
    console.log('🚀 Triggering AR instantly!');
    
    // Stop detection
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current);
      detectionIntervalRef.current = null;
    }
    
    setIsScanning(false);
    setPuzzleDetected(true);
    
    // Start video immediately
    playARVideo();
    
    // Auto-reset after 10 seconds
    setTimeout(() => {
      resetAR();
    }, 10000);
  };

  const playARVideo = () => {
    if (overlayVideoRef.current) {
      console.log('🎬 Starting video playback...');
      
      // Use a working test video
      overlayVideoRef.current.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
      overlayVideoRef.current.muted = true; // Start muted for autoplay
      overlayVideoRef.current.loop = true;
      
      overlayVideoRef.current.oncanplay = () => {
        console.log('✅ Video ready, playing now!');
        overlayVideoRef.current.play()
          .then(() => {
            setVideoPlaying(true);
            console.log('🎉 Video playing successfully!');
          })
          .catch(err => {
            console.error('❌ Video play failed:', err);
          });
      };
      
      overlayVideoRef.current.load();
    }
  };

  const resetAR = () => {
    console.log('🔄 Resetting to scan mode...');
    
    setPuzzleDetected(false);
    setVideoPlaying(false);
    setConfidence(0);
    
    if (overlayVideoRef.current) {
      overlayVideoRef.current.pause();
      overlayVideoRef.current.src = '';
    }
    
    // Restart detection after 2 seconds
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
      
      {/* Header */}
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
                backgroundColor: confidence > 60 ? '#00ff88' : '#ffa500',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }} />
            </div>
            <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
              Detection: {confidence}% {confidence > 60 && '🎯'}
            </p>
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
        marginBottom: '1.5rem',
        border: puzzleDetected ? '4px solid #00ff88' : isScanning ? '2px solid #6496ff' : '2px solid #666'
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

        {/* Hidden canvas for detection */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />

        {/* AR Video Overlay */}
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
            
            <video
              ref={overlayVideoRef}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                backgroundColor: '#000'
              }}
              playsInline
            />

            {/* AR Badge */}
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

            {/* Video status */}
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
              {videoPlaying ? '📹 Playing' : '⏳ Loading'}
            </div>
          </div>
        )}

        {/* Scanning Frame */}
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
              <small style={{ color: 'rgba(255, 255, 255, 0.8)' }}>AI will detect automatically</small>
            </div>
          </div>
        )}
      </div>

      {/* Manual Reset Button */}
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

      {/* Status */}
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
        Video: {videoPlaying ? 'PLAYING' : 'STOPPED'}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.02); }
        }
      `}</style>
    </div>
  );
}

export default ARScanner;