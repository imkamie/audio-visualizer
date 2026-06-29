import { Canvas } from '@react-three/fiber'

import { Scene } from './components/Scene'

export default function App() {
    return (
        <Canvas style={{ width: '100vw', height: '100vh', background: '#000' }}>
            <Scene />
        </Canvas>
    )
}
