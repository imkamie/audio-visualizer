import type { Ref } from 'react'
import type { Mesh } from 'three'

type BarProps = {
    x: number
    ref?: Ref<Mesh>
}

export function Bar({ x, ref }: BarProps) {
    return (
        <mesh ref={ref} position={[x, 0.5, 0]}>
            <boxGeometry args={[0.25, 1, 0.25]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )
}