import { useEffect, useMemo, useState } from 'react'

type VisualizerLayout = {
  width: number
  isMobile: boolean
  isTablet: boolean
  canvasHeight: string
  cameraZ: number
  cameraY: number
  barWidth: number
  barGap: number
  barCount: number
}

const MOBILE_MAX = 767
const TABLET_MAX = 1199

export function useVisualizerLayout(): VisualizerLayout {
  const [width, setWidth] = useState(() => window.innerWidth)

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return useMemo(() => {
    if (width <= MOBILE_MAX) {
      return {
        width,
        isMobile: true,
        isTablet: false,
        canvasHeight: '100dvh',
        cameraZ: 6.9,
        cameraY: 0.15,
        barWidth: 0.08,
        barGap: 0.038,
        barCount: 36,
      }
    }

    if (width <= TABLET_MAX) {
      return {
        width,
        isMobile: false,
        isTablet: true,
        canvasHeight: '100dvh',
        cameraZ: 6.2,
        cameraY: 0.1,
        barWidth: 0.096,
        barGap: 0.05,
        barCount: 44,
      }
    }

    return {
      width,
      isMobile: false,
      isTablet: false,
      canvasHeight: '100dvh',
      cameraZ: 5.4,
      cameraY: 0,
      barWidth: 0.105,
      barGap: 0.06,
      barCount: 48,
    }
  }, [width])
}
