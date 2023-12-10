import { Center, OrbitControls } from '@react-three/drei';
import Model from './Model';
const App = () => {
    return (
        <>
            <OrbitControls />
            <Center>
                <Model />
            </Center>
        </>
    );
};

export default App;

