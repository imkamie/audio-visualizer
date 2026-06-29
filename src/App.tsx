import { Canvas } from '@react-three/fiber'

export default function App() {
    return (
        <Canvas style={{ width: '100vw', height: '100vh', background: '#000' }}>
            <ambientLight intensity={2} />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color="hotpink" />
            </mesh>
        </Canvas>
    )
}
