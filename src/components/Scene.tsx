import { OrbitControls } from '@react-three/drei'

import { RotatingCube } from './RotatingCube'

export function Scene() {
    return (
        <>
            <ambientLight intensity={2} />
            <RotatingCube />
            <OrbitControls />
        </>
    )
}
