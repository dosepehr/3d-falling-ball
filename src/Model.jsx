import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
const Model = () => {
    const { nodes } = useGLTF('/model/ball.glb');
    const bakedTexture = useTexture('/model/ball.jpg');
    bakedTexture.flipY = false;
    return (
        <>
            <group>
                <mesh
                    position={[-0.5, 12.7, -3.1]}
                    rotation={[Math.PI / 2, 0, 0]}
                    castShadow
                    receiveShadow
                >
                    <meshBasicMaterial color={'red'} />
                    <sphereGeometry args={[1]} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_1.geometry}
                    material={nodes.Plane_1.material}
                    position={[0, 17.501, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Castle.geometry}
                    material={nodes.Castle.material}
                    position={[0, 17.501, -0.001]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_2.geometry}
                    material={nodes.Plane_2.material}
                    position={[-0.006, 11.486, 5.682]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
            </group>
        </>
    );
};

export default Model;
