import React, { createContext, useContext } from 'react'

import { useAudioAnalyzer } from '../hooks/useAudioAnalyzer'

type AudioContextValue = ReturnType<typeof useAudioAnalyzer>

const AudioContext = createContext<AudioContextValue | null>(null)

export function AudioProvider({ children }: { children: React.ReactNode }) {
    const audio = useAudioAnalyzer()

    return (
        <AudioContext.Provider value={audio}>{children}</AudioContext.Provider>
    )
}

export function useAudio() {
    const context = useContext(AudioContext)

    if (!context) {
        throw new Error('useAudio must be used inside AudioProvider')
    }

    return context
}
