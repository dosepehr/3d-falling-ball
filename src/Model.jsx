import { useRef, useLayoutEffect } from 'react';
import { useGLTF, useTexture, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Lights from './Lights';
import gsap from 'gsap';
import changeBallColor from './helpers/changeBallColor';
const Model = () => {
    const { nodes } = useGLTF('/model/ball.glb');
    const bakedTexture = useTexture('/model/ball.jpg');
    bakedTexture.flipY = false;
    // refs
    const ball = useRef();
    const tl = useRef(gsap.timeline());
    const scroll = useScroll();
    useFrame(() => {
        // gsap animation
        tl.current.seek(scroll.offset * tl.current.duration());
        changeBallColor(ball.current);
    });
    useLayoutEffect(() => {
        tl.current = gsap.timeline({
            defaults: {
                duration: 4,
            },
        });
        tl.current.to(ball.current.position, {
            z: '+=5.5',
            y: '-=1',
        });
        tl.current.to(ball.current.position, {
            y: '-=1',
            z: '-=1',
            x: '-=1',
        });
        tl.current.to(ball.current.position, {
            x: '+=1.5',
            z: '+=1.5',
        });
        tl.current.to(ball.current.position, {
            y: '-=4.5',
        });
        tl.current.to(ball.current.position, {
            x: '+=4.8',
        });
        tl.current.to(ball.current.position, {
            y: '-=55',
        });
    }, []);
    return (
        <>
            <Lights />
            <group>
                <mesh
                    ref={ball}
                    position={[-0.5, 12.7, -3.1]}
                    rotation={[Math.PI / 2, 0, 0]}
                    castShadow
                    receiveShadow
                >
                    <meshStandardMaterial color={'red'} />
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
                    <meshStandardMaterial map={bakedTexture} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Castle.geometry}
                    material={nodes.Castle.material}
                    position={[0, 17.501, -0.001]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <meshStandardMaterial map={bakedTexture} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_2.geometry}
                    material={nodes.Plane_2.material}
                    position={[-0.006, 11.486, 5.682]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <meshStandardMaterial map={bakedTexture} />
                </mesh>
            </group>
        </>
    );
};

export default Model;
