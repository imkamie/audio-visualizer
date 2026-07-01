import { useCallback, useRef, useState } from 'react'

import { AUDIO_SRC, FFT_SIZE } from '../config/audio'

export function useAudioAnalyzer() {
    const analyserRef = useRef<AnalyserNode | null>(null)
    const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const [isPlaying, setIsPlaying] = useState(false)

    const startAudio = useCallback(async () => {
        if (audioRef.current) {
            await audioRef.current.play()
            setIsPlaying(true)
            return
        }

        const audio = new Audio(AUDIO_SRC)
        audio.loop = true

        const context = new AudioContext()
        const source = context.createMediaElementSource(audio)
        const analyser = context.createAnalyser()

        analyser.fftSize = FFT_SIZE

        source.connect(analyser)
        analyser.connect(context.destination)

        analyserRef.current = analyser
        dataArrayRef.current = new Uint8Array(
            new ArrayBuffer(analyser.frequencyBinCount)
        )
        audioRef.current = audio

        await context.resume()
        await audio.play()

        setIsPlaying(true)
    }, [])

    const pauseAudio = useCallback(() => {
        if (!audioRef.current) return

        audioRef.current.pause()
        setIsPlaying(false)
    }, [])

    return {
        analyser: analyserRef,
        dataArray: dataArrayRef,
        isPlaying,
        startAudio,
        pauseAudio,
    }
}