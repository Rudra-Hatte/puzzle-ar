import React, { useEffect } from 'react';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ARScene = () => {
    useEffect(() => {
        const scene = new Scene();
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const loader = new GLTFLoader();
        loader.load('/path/to/your/model.glb', (gltf) => {
            scene.add(gltf.scene);
        });

        const arButton = ARButton.createButton(renderer);
        document.body.appendChild(arButton);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            document.body.removeChild(renderer.domElement);
            document.body.removeChild(arButton);
        };
    }, []);

    return null;
};

export default ARScene;