import { OrbitControls } from '@react-three/drei'

import { FrequencyBars } from './FrequencyBars'

export function Scene() {
    return (
        <>
            <ambientLight intensity={2} />
            <FrequencyBars />
            <OrbitControls />
        </>
    )
}
