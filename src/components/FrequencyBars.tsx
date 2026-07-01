import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

import { Bar } from './Bar'
import { useAudio } from '../context/AudioContext'

export function FrequencyBars() {
    const count = 16
    const barsRef = useRef<(Mesh | null)[]>([])
    const { analyser, dataArray } = useAudio()

    useFrame(() => {
        const analyserNode = analyser.current
        const frequencies = dataArray.current

        if (!analyserNode || !frequencies) {
            return
        }

        analyserNode.getByteFrequencyData(frequencies)

        barsRef.current.forEach((bar, idx) => {
            if (!bar) {
                return
            }
            const value = frequencies[idx]
            // const height = Math.max(value / 40, 0.05)
            const height = value / 160

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
