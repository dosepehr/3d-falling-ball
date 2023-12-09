import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';

const App = () => {
    return (
        <>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [3, 2, 6],
                }}
            >
                <OrbitControls />
                <mesh position={[3, 0, 0]}>
                    <sphereGeometry args={[1]} />
                    <meshBasicMaterial color='yellow' />
                </mesh>
                <mesh position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
                    <planeGeometry args={[15, 15]} />
                    <meshBasicMaterial color='green' />
                </mesh>
                <mesh position={[-3, 0, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshBasicMaterial color='skyblue' />
                </mesh>
            </Canvas>
        </>
    );
};

export default App;

