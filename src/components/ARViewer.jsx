import React, { useEffect, useRef, useState } from 'react';

function ARViewer({ experiment, onReset }) {
  const sceneRef = useRef(null);
  const [arStarted, setArStarted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let arSystem = null;

    const initAR = async () => {
      try {
        const scene = sceneRef.current;
        if (!scene) return;

        // Wait for scene to be ready
        scene.addEventListener('loaded', () => {
          arSystem = scene.systems["mindar-image-system"];
          if (arSystem) {
            arSystem.start();
            setArStarted(true);
          }
        });

        // Handle AR events
        const targetFound = () => {
          console.log('Target found');
          const video = document.querySelector('#experiment-video');
          if (video) {
            video.play().catch(e => console.log('Video play failed:', e));
          }
        };

        const targetLost = () => {
          console.log('Target lost');
          const video = document.querySelector('#experiment-video');
          if (video) {
            video.pause();
          }
        };

        scene.addEventListener('targetFound', targetFound);
        scene.addEventListener('targetLost', targetLost);

        return () => {
          scene.removeEventListener('targetFound', targetFound);
          scene.removeEventListener('targetLost', targetLost);
          if (arSystem) {
            arSystem.stop();
          }
        };
      } catch (err) {
        console.error('AR initialization failed:', err);
        setError('Failed to initialize AR. Please check camera permissions.');
      }
    };

    initAR();
  }, []);

  const handleStartAR = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop()); // Just check permission
      setArStarted(true);
    } catch (err) {
      setError('Camera access required for AR experience');
    }
  };

  if (error) {
    return (
      <div className="ar-error">
        <h2>AR Error</h2>
        <p>{error}</p>
        <button onClick={onReset}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="ar-viewer">
      <div className="ar-instructions">
        <h2>🎥 AR Experience Ready!</h2>
        <p>Point your camera at the completed puzzle to see the {experiment.name} video in AR!</p>
        
        <div className="ar-controls">
          <button onClick={onReset} className="back-btn">
            🏠 Back to Menu
          </button>
        </div>
      </div>

      <div className="ar-scene-container">
        <a-scene
          ref={sceneRef}
          mindar-image="imageTargetSrc: /markers/targets.mind; autoStart: false; uiScanning: true; uiError: true; uiLoading: true"
          color-space="sRGB"
          embedded
          renderer="colorManagement: true, physicallyCorrectLights"
          vr-mode-ui="enabled: false"
          device-orientation-permission-ui="enabled: false"
        >
          <a-assets>
            <video
              id="experiment-video"
              src={experiment.video}
              loop="true"
              muted="true"
              playsinline="true"
              webkit-playsinline="true"
              crossorigin="anonymous"
            />
          </a-assets>

          <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse"></a-camera>

          <a-entity mindar-image-target="targetIndex: 0">
            <a-plane
              position="0 0 0"
              height="1"
              width="1.5"
              rotation="-90 0 0"
              material="shader: flat; src: #experiment-video; transparent: true; alphaTest: 0.5"
              animation="property: rotation; to: -90 360 0; loop: true; dur: 20000"
            />
            
            <a-text 
              value={experiment.name}
              position="0 0.6 0"
              align="center"
              color="#ffffff"
              background="color: #2c3e50; opacity: 0.8"
              font="kelsonsans"
            />
          </a-entity>
        </a-scene>
      </div>

      <div className="ar-tips">
        <h4>💡 Tips for best AR experience:</h4>
        <ul>
          <li>Ensure good lighting</li>
          <li>Hold device steady</li>
          <li>Keep the puzzle image in view</li>
          <li>Move slowly for smooth tracking</li>
        </ul>
      </div>
    </div>
  );
}

export default ARViewer;