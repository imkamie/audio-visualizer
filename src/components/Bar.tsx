import type { Ref } from 'react'
import type { Mesh } from 'three'

type BarProps = {
  x: number
  height: number
  width: number
  color: string
  emissiveIntensity?: number
  y?: number
  ref: Ref<Mesh>
}

export function Bar({
  x,
  height,
  width,
  color,
  emissiveIntensity = 0.7,
  y,
  ref,
}: BarProps) {
  return (
    <mesh ref={ref} position={[x, y ?? height / 2, 0]} scale={[1, height, 1]}>
      <boxGeometry args={[width, 1, width]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={emissiveIntensity}
        roughness={0.32}
        metalness={0.18}
      />
    </mesh>
  )
}
