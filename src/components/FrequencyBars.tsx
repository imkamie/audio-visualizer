import { useState } from 'react'

import { useFrame } from '@react-three/fiber'

import { Bar } from './Bar'

export function FrequencyBars() {
    const count = 16

    const [heights, setHeights] = useState<number[]>(
        Array.from({ length: count }, () => 1)
    )

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()

        const heights = Array.from({ length: count }, (_, idx) => {
            const x = (idx - count / 2 + 0.5) * 0.4

            return (Math.sin(time + x) + 1.2) * 0.8
        })

        setHeights(heights)
    })

    return (
        <group position={[0, -1, 0]}>
            {heights.map((height, idx) => {
                const x = (idx - count / 2 + 0.5) * 0.4
                return <Bar key={idx} x={x} height={height} />
            })}
        </group>
    )
}
