import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const App = () => {
    const cube = useRef();
    const group = useRef();
    useFrame((state, delta) => {
        const time = state.clock.elapsedTime;

        const x = Math.cos(time) * 2;
        const z = Math.sin(time) * 2;
        group.current.position.x = x;
        group.current.position.z = z;
    });
    return (
        <>
            <directionalLight position={[1, 2, 3]} intensity={1.5} castShadow />
            <ambientLight intensity={1.5} />
            <OrbitControls />
            <group ref={group}>
                <mesh position={[3, 0, 0]} castShadow>
                    <sphereGeometry args={[1]} />
                    <meshStandardMaterial color='yellow' />
                </mesh>
                <mesh position={[-3, 0, 0]} castShadow ref={cube}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color='skyblue' />
                </mesh>
            </group>
            <mesh position={[0, -1, 0]} rotation-x={-Math.PI / 2} receiveShadow>
                <planeGeometry args={[15, 15]} />
                <meshStandardMaterial color='green' />
            </mesh>
        </>
    );
};

export default App;

