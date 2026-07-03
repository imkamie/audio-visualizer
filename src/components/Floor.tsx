import { MeshReflectorMaterial } from '@react-three/drei'

export function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]}>
      <planeGeometry args={[20, 8]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={35}
        roughness={0.15}
        depthScale={1}
        minDepthThreshold={0.85}
        maxDepthThreshold={1.2}
        color="#111"
        metalness={0.3}
      />
    </mesh>
  )
}
