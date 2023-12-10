import React from 'react';
import { useGLTF } from '@react-three/drei';
const Model = () => {
    const { nodes } = useGLTF('/model/ball.glb');
    return (
        <>
            <group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_1.geometry}
                    material={nodes.Sphere_1.material}
                    position={[0, 17.501, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_1.geometry}
                    material={nodes.Plane_1.material}
                    position={[0, 17.501, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Castle.geometry}
                    material={nodes.Castle.material}
                    position={[0, 17.501, -0.001]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_2.geometry}
                    material={nodes.Plane_2.material}
                    position={[-0.006, 11.486, 5.682]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
            </group>
        </>
    );
};

export default Model;
