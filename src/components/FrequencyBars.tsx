import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

import { Bar } from './Bar'

export function FrequencyBars() {
    const count = 16
    const barsRef = useRef<(Mesh | null)[]>([])

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()

        barsRef.current.forEach((bar, idx) => {
            if (!bar) {
                return
            }
            const x = (idx - count / 2 + 0.5) * 0.4
            const height = (Math.sin(time + x) + 1.2) * 0.8

            bar.scale.y = height
            bar.position.y = height / 2
        })
    })

    return (
        <group position={[0, -1, 0]}>
            {Array.from({ length: count }, (_, idx) => {
                const x = (idx - count / 2 + 0.5) * 0.4

                return (
                    <Bar
                        key={idx}
                        x={x}
                        ref={(mesh) => {
                            barsRef.current[idx] = mesh
                        }}
                    />
                )
            })}
        </group>
    )
}
