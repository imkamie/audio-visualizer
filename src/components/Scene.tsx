import { OrbitControls } from '@react-three/drei'

import { Floor } from './Floor'
import { FrequencyBars } from './FrequencyBars'

type SceneProps = {
  layout: {
    isMobile: boolean
    barWidth: number
    barGap: number
    barCount: number
  }
}

export function Scene({ layout }: SceneProps) {
  return (
    <>
      <ambientLight intensity={0.8} />

      <directionalLight position={[0, 4, 5]} intensity={2.5} />
      <pointLight position={[-4, 2, 3]} intensity={8} color="#ff4fd8" />
      <pointLight position={[4, 2, 3]} intensity={5} color="#ffffff" />

      <FrequencyBars
        barCount={layout.barCount}
        barWidth={layout.barWidth}
        barGap={layout.barGap}
      />

      <Floor />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enabled={!layout.isMobile}
      />
    </>
  )
}
