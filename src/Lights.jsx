import React from 'react';

const Lights = () => {
    return (
        <>
            <ambientLight intensity={2.5} />
            <directionalLight
                position={[5, 20, -5]}
                intensity={5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={100}
                shadow-camera-left={-50}
                shadow-camera-right={50}
                shadow-camera-top={50}
                shadow-camera-bottom={-50}
                shadow-camera-near={0.5}
            />
        </>
    );
};

export default Lights;
