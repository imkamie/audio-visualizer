import { RotatingCube } from './RotatingCube'

export function Scene() {
    return (
        <>
            <ambientLight intensity={2} />
            <RotatingCube />
        </>
    )
}
