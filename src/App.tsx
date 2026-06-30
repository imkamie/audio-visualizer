import { Canvas } from '@react-three/fiber'

import { Scene } from './components/Scene'

export default function App() {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            style={{ width: '100vw', height: '100vh', background: '#000' }}
        >
            <Scene />
        </Canvas>
    )
}
