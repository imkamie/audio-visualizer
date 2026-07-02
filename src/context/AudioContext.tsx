import { createContext } from 'react'

import { useAudioAnalyzer } from '../hooks/useAudioAnalyzer'

export type AudioContextValue = ReturnType<typeof useAudioAnalyzer>

export const AudioContext = createContext<AudioContextValue | null>(null)
