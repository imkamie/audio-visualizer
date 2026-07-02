export const FFT_SIZE = 256

export const BAR_COUNT = 16
export const BAR_SPACING = 0.4
export const BAR_HEIGHT_SCALE = 120
export const BAR_SMOOTHING = 0.2

export const BAR_POSITIONS = Array.from(
    { length: BAR_COUNT },
    (_, idx) => (idx - BAR_COUNT / 2 + 0.5) * BAR_SPACING
)

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