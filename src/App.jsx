import { Center, ScrollControls } from '@react-three/drei';
import Model from './Model';
const App = () => {
    return (
        <>
            <Center>
                <ScrollControls pages={14}>
                    <Model />
                </ScrollControls>
            </Center>
        </>
    );
};

export default App;

