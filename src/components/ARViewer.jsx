import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function ARViewer({ experiment, onReset }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const arSceneRef = useRef(null);
  const [isTracking, setIsTracking] = useState(false);
  const [arReady, setArReady] = useState(false);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState('');

  useEffect(() => {
    initializeAR();
    return () => {
      cleanup();
    };
  }, []);

  const initializeAR = async () => {
    try {
      // Initialize camera
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1280, min: 640 },
          height: { ideal: 720, min: 480 }
        }
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        
        // Wait for video to be ready
        videoRef.current.onloadedmetadata = () => {
          setupARScene();
        };
      }
    } catch (err) {
      setError('Camera access required for AR. Please allow camera permissions.');
    }
  };

  const setupARScene = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    
    if (!canvas || !video) return;

    // Set canvas size to match video
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    
    // Initialize Three.js scene for AR
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    
    renderer.setSize(canvas.width, canvas.height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Create video texture for the AR overlay
    const videoTexture = new THREE.VideoTexture(createVideoElement(experiment.video));
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    
    // Create plane geometry for video overlay
    const geometry = new THREE.PlaneGeometry(2, 1.5);
    const material = new THREE.MeshBasicMaterial({ 
      map: videoTexture, 
      transparent: true,
      opacity: 0.9
    });
    const videoPlane = new THREE.Mesh(geometry, material);
    
    // Position the video plane
    videoPlane.position.set(0, 0, -3);
    scene.add(videoPlane);
    
    // Store references
    arSceneRef.current = {
      scene,
      camera,
      renderer,
      videoPlane,
      videoTexture
    };
    
    // Start AR tracking simulation
    startARTracking();
    setArReady(true);
  };

  const createVideoElement = (src) => {
    const video = document.createElement('video');
    video.src = src;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = 'anonymous';
    return video;
  };

  const startARTracking = () => {
    const trackingLoop = () => {
      if (!arSceneRef.current) return;
      
      const { scene, camera, renderer, videoPlane } = arSceneRef.current;
      
      // Simulate marker detection and tracking
      if (isTracking) {
        // Add rotation animation to simulate 3D tracking
        videoPlane.rotation.x += 0.005;
        videoPlane.rotation.y += 0.01;
        
        // Update position based on "detected" marker
        const time = Date.now() * 0.001;
        videoPlane.position.x = Math.sin(time) * 0.5;
        videoPlane.position.y = Math.cos(time) * 0.3;
      }
      
      renderer.render(scene, camera);
      requestAnimationFrame(trackingLoop);
    };
    
    trackingLoop();
  };

  const handleStartScanning = () => {
    if (!arReady) return;
    
    setIsTracking(true);
    setDebugInfo('Scanning for puzzle... Move camera slowly over the puzzle');
    
    // Simulate marker detection after 2 seconds
    setTimeout(() => {
      setDebugInfo('Puzzle detected! Video is now tracking the surface');
      const videoElement = arSceneRef.current?.videoTexture?.image;
      if (videoElement) {
        videoElement.play().catch(e => console.log('Video play failed:', e));
      }
    }, 2000);
  };

  const handleStopScanning = () => {
    setIsTracking(false);
    setDebugInfo('Scanning stopped');
    
    const videoElement = arSceneRef.current?.videoTexture?.image;
    if (videoElement) {
      videoElement.pause();
    }
  };

  const cleanup = () => {
    // Stop camera
    if (videoRef.current?.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
    
    // Cleanup Three.js
    if (arSceneRef.current) {
      const { renderer, scene } = arSceneRef.current;
      renderer.dispose();
      scene.clear();
    }
  };

  if (error) {
    return (
      <div className="ar-error">
        <h2>🚫 AR Error</h2>
        <p>{error}</p>
        <button onClick={onReset}>Go Back to Menu</button>
      </div>
    );
  }

  return (
    <div className="ar-viewer">
      <div className="ar-header">
        <h2>🔬 AR Physics Experience</h2>
        <p>Scan your completed puzzle to see {experiment.name} in AR!</p>
      </div>

      <div className="ar-container">
        {/* Camera feed */}
        <video 
          ref={videoRef}
          className="camera-feed"
          autoPlay 
          playsInline 
          muted
        />
        
        {/* AR overlay canvas */}
        <canvas 
          ref={canvasRef}
          className="ar-overlay"
        />
        
        {/* Scanning frame */}
        <div className="scanning-frame">
          <div className="scan-corners"></div>
          <p>Position puzzle within this frame</p>
        </div>
        
        {/* Debug info */}
        {debugInfo && (
          <div className="debug-info">
            <p>{debugInfo}</p>
          </div>
        )}
      </div>

      <div className="ar-controls">
        <button 
          onClick={handleStartScanning}
          disabled={!arReady || isTracking}
          className="scan-btn"
        >
          {isTracking ? '🎯 Scanning...' : '📱 Start AR Scan'}
        </button>
        
        <button 
          onClick={handleStopScanning}
          disabled={!isTracking}
          className="stop-btn"
        >
          ⏹️ Stop Scanning
        </button>
        
        <button onClick={onReset} className="back-btn">
          🏠 Back to Menu
        </button>
      </div>

      <div className="ar-instructions">
        <h4>📋 AR Instructions:</h4>
        <ol>
          <li>Place your completed puzzle on a flat surface</li>
          <li>Ensure good lighting (no shadows on puzzle)</li>
          <li>Click "Start AR Scan" and slowly move camera over puzzle</li>
          <li>When detected, the video will appear on the puzzle surface</li>
          <li>Move your device around to see the 3D AR effect!</li>
        </ol>
      </div>
    </div>
  );
}

export default ARViewer;