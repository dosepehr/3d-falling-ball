import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Canvas } from '@react-three/fiber';
ReactDOM.createRoot(document.getElementById('root')).render(
    <Canvas
        shadows
        camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [3, 2, 6],
        }}
    >
        <App />
    </Canvas>
);

