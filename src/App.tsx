import { Canvas } from '@react-three/fiber'

import { Scene } from './components/Scene'
import { useAudio } from './context/AudioContext'

export default function App() {
    const { isPlaying, startAudio } = useAudio()

    return (
        <>
            {!isPlaying && (
                <button
                    type="button"
                    onClick={startAudio}
                    style={{
                        position: 'fixed',
                        top: 20,
                        left: 20,
                        zIndex: 1,
                    }}
                >
                    Start
                </button>
            )}
            <Canvas
                camera={{ position: [0, 0, 5], fov: 60 }}
                style={{ width: '100vw', height: '100vh', background: '#000' }}
            >
                <Scene />
            </Canvas>
        </>
    )
}
