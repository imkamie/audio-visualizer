import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Mesh } from 'three'

import {
  BAR_FALL_SPEED,
  BAR_HEIGHT_SCALE,
  BAR_RISE_SPEED,
  getBarPositions,
  MIN_BAR_HEIGHT,
  PEAK_FALL_SPEED,
  PEAK_OFFSET,
} from '../config/audio'
import { useAudio } from '../context/useAudio'
import { getAverageFrequency } from '../utils/getAverageFrequency'
import { getFrequencyRange } from '../utils/getFrequencyRange'
import { Bar } from './Bar'

type FrequencyBarsProps = {
  barCount: number
  barWidth: number
  barGap: number
}

function updateBar(bar: Mesh, value: number) {
  const targetHeight = MIN_BAR_HEIGHT + value / BAR_HEIGHT_SCALE
  const speed = targetHeight > bar.scale.y ? BAR_RISE_SPEED : BAR_FALL_SPEED

  bar.scale.y += (targetHeight - bar.scale.y) * speed
  bar.position.y = bar.scale.y / 2
}

function updatePeak(peak: Mesh, barHeight: number) {
  const targetY = barHeight + PEAK_OFFSET
  const nextY = peak.position.y - PEAK_FALL_SPEED

  peak.position.y = Math.max(targetY, nextY)
}

export function FrequencyBars({
  barCount,
  barWidth,
  barGap,
}: FrequencyBarsProps) {
  const barsRef = useRef<(Mesh | null)[]>([])
  const peaksRef = useRef<(Mesh | null)[]>([])

  const { analyser, dataArray } = useAudio()

  const barPositions = useMemo(() => {
    return getBarPositions(barCount, barWidth, barGap)
  }, [barCount, barWidth, barGap])

  useFrame(() => {
    const analyserNode = analyser.current
    const frequencies = dataArray.current

    if (!analyserNode || !frequencies) {
      return
    }

    analyserNode.getByteFrequencyData(frequencies)

    barsRef.current.forEach((bar, idx) => {
      if (!bar) return

      const { startIndex, endIndex } = getFrequencyRange(
        idx,
        barPositions.length,
        frequencies.length,
      )

      const value = getAverageFrequency(frequencies, startIndex, endIndex)

      updateBar(bar, value)

      const peak = peaksRef.current[idx]

      if (peak) {
        updatePeak(peak, bar.scale.y)
      }
    })
  })

  return (
    <group position={[0, -1, 0]}>
      {barPositions.map((x, idx) => (
        <group key={idx}>
          <Bar
            x={x}
            width={barWidth}
            height={MIN_BAR_HEIGHT}
            color="#ff4fd8"
            emissiveIntensity={0.7}
            ref={(mesh) => {
              barsRef.current[idx] = mesh
            }}
          />

          <Bar
            x={x}
            y={MIN_BAR_HEIGHT + PEAK_OFFSET}
            width={barWidth}
            height={0.035}
            color="#ffdff7"
            emissiveIntensity={1.5}
            ref={(mesh) => {
              peaksRef.current[idx] = mesh
            }}
          />
        </group>
      ))}
    </group>
  )
}
