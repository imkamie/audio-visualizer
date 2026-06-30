type BarProps = {
    x: number
    height: number
}

export function Bar({ x, height }: BarProps) {
    return (
        <mesh position={[x, height / 2, 0]} scale={[1, height, 1]}>
            <boxGeometry args={[0.25, 1, 0.25]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )
}
