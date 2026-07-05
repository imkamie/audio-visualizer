import { OrbitControls } from '@react-three/drei'

import { Floor } from './Floor'
import { FrequencyBars } from './FrequencyBars'

export function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />

      <directionalLight position={[0, 4, 5]} intensity={2.5} />
      <pointLight position={[-4, 2, 3]} intensity={8} color="#ff4fd8" />
      <pointLight position={[4, 2, 3]} intensity={5} color="#ffffff" />

      <FrequencyBars />
      <Floor />

      <OrbitControls />
    </>
  )
}
