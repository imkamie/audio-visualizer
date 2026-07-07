import { MeshReflectorMaterial } from '@react-three/drei'

type FloorProps = {
  width?: number
  depth?: number
}

export function Floor({ width = 20, depth = 8 }: FloorProps) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]}>
      <planeGeometry args={[width, depth]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={28}
        roughness={0.18}
        depthScale={1}
        minDepthThreshold={0.85}
        maxDepthThreshold={1.2}
        color="#111"
        metalness={0.32}
      />
    </mesh>
  )
}
