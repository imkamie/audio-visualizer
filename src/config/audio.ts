export const FFT_SIZE = 256

export const BAR_COUNT = 48
export const BAR_WIDTH = 0.12
export const MIN_BAR_HEIGHT = 0.08
export const BAR_GAP = 0.045
export const BAR_SPACING = BAR_WIDTH + BAR_GAP

export const BAR_HEIGHT_SCALE = 120
export const BAR_RISE_SPEED = 0.35
export const BAR_FALL_SPEED = 0.08

export const BAR_POSITIONS = Array.from({ length: BAR_COUNT }, (_, idx) => {
  const totalWidth = BAR_COUNT * BAR_SPACING

  return idx * BAR_SPACING - totalWidth / 2 + BAR_SPACING / 2
})

export const PEAK_FALL_SPEED = 0.025
export const PEAK_OFFSET = 0.08

export type Track = {
  id: string
  title: string
  src: string
}

export const DEFAULT_TRACKS: Track[] = [
  {
    id: 'no-copyright-music-1',
    title: 'No Copyright Music - SigmaMusicArt',
    src: '/no-copyright-music-1.mp3',
  },
  {
    id: 'no-copyright-music-2',
    title: 'No Copyright Music - Loksii',
    src: '/no-copyright-music-2.mp3',
  },
]

export const DEFAULT_TRACK = DEFAULT_TRACKS[0]
