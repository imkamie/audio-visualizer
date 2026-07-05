import type { Ref } from 'react'
import type { Mesh } from 'three'

import { BAR_WIDTH } from '../config/audio'

type BarProps = {
  x: number
  height: number
  color: string
  emissiveIntensity?: number
  y?: number
  ref: Ref<Mesh>
}

export function Bar({
  x,
  height,
  color,
  emissiveIntensity = 0.7,
  y,
  ref,
}: BarProps) {
  return (
    <mesh ref={ref} position={[x, y ?? height / 2, 0]} scale={[1, height, 1]}>
      <boxGeometry args={[BAR_WIDTH, 1, BAR_WIDTH]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={emissiveIntensity}
        roughness={0.35}
        metalness={0.15}
      />
    </mesh>
  )
}
