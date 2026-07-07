export const FFT_SIZE = 256

export const MIN_BAR_HEIGHT = 0.08

export const BAR_HEIGHT_SCALE = 120
export const BAR_RISE_SPEED = 0.35
export const BAR_FALL_SPEED = 0.08

export const PEAK_FALL_SPEED = 0.025
export const PEAK_OFFSET = 0.08

export function getBarPositions(
  count: number,
  barWidth: number,
  barGap: number,
) {
  const spacing = barWidth + barGap
  const totalWidth = count * spacing

  return Array.from({ length: count }, (_, idx) => {
    return idx * spacing - totalWidth / 2 + spacing / 2
  })
}

export type Track = {
  id: string
  title: string
  src: string
}

const getPublicAssetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`
export const DEFAULT_TRACKS: Track[] = [
  {
    id: 'no-copyright-music-1',
    title: 'No Copyright Music - SigmaMusicArt',
    src: getPublicAssetUrl('no-copyright-music-1.mp3'),
  },
  {
    id: 'no-copyright-music-2',
    title: 'No Copyright Music - Loksii',
    src: getPublicAssetUrl('no-copyright-music-2.mp3'),
  },
]

export const DEFAULT_TRACK = DEFAULT_TRACKS[0]
