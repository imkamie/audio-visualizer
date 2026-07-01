import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

import { Bar } from './Bar'
import { useAudio } from '../context/AudioContext'
import { BAR_HEIGHT_SCALE, BAR_POSITIONS, BAR_SMOOTHING } from '../config/audio'

function updateBar(bar: Mesh, value: number) {
    const height = value / BAR_HEIGHT_SCALE

    bar.scale.y += (height - bar.scale.y) * BAR_SMOOTHING
    bar.position.y = bar.scale.y / 2
}

export function FrequencyBars() {
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
            if (!bar) return

            updateBar(bar, frequencies[idx])
        })
    })

    return (
        <group position={[0, -1, 0]}>
            {BAR_POSITIONS.map((x, idx) => (
                <Bar
                    key={idx}
                    x={x}
                    ref={(mesh) => {
                        barsRef.current[idx] = mesh
                    }}
                />
            ))}
        </group>
    )
}
