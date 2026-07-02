import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

import { Bar } from './Bar'
import { useAudio } from '../context/AudioContext'
import {
    BAR_FALL_SPEED,
    BAR_HEIGHT_SCALE,
    BAR_POSITIONS,
    BAR_RISE_SPEED,
} from '../config/audio'
import { getAverageFrequency } from '../utils/getAverageFrequency'
import { getLogFrequencyRange } from '../utils/getLogFrequencyRange'

function updateBar(bar: Mesh, value: number) {
    const targetHeight = value / BAR_HEIGHT_SCALE
    const speed = targetHeight > bar.scale.y ? BAR_RISE_SPEED : BAR_FALL_SPEED

    bar.scale.y += (targetHeight - bar.scale.y) * speed
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

            const { startIndex, endIndex } = getLogFrequencyRange(
                idx,
                BAR_POSITIONS.length,
                frequencies.length
            )

            const value = getAverageFrequency(frequencies, startIndex, endIndex)

            updateBar(bar, value)
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
