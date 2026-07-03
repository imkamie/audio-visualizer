import type { Ref } from 'react'
import type { Mesh } from 'three'

import { BAR_WIDTH } from '../config/audio'

type BarProps = {
  x: number
  height: number
  color: string
  emissiveIntensity?: number
  ref: Ref<Mesh>
}

export function Bar({
  x,
  height,
  color,
  emissiveIntensity = 0.7,
  ref,
}: BarProps) {
  return (
    <mesh ref={ref} position={[x, 0, 0]}>
      <boxGeometry args={[BAR_WIDTH, height, BAR_WIDTH]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={emissiveIntensity}
      />
    </mesh>
  )
}
