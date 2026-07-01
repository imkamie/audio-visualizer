export const FFT_SIZE = 256

export const BAR_COUNT = 16
export const BAR_SPACING = 0.4
export const BAR_HEIGHT_SCALE = 120
export const BAR_SMOOTHING = 0.2

export const AUDIO_SRC = '/no-copyright-music.mp3'

export const BAR_POSITIONS = Array.from(
    { length: BAR_COUNT },
    (_, idx) => (idx - BAR_COUNT / 2 + 0.5) * BAR_SPACING
)