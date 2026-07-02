import { useCallback, useRef, useState } from 'react'

import { DEFAULT_TRACK, DEFAULT_TRACKS, FFT_SIZE, type Track } from '../config/audio'

export function useAudioAnalyzer() {
    const analyserRef = useRef<AnalyserNode | null>(null)
    const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTrack, setCurrentTrack] = useState<Track>(DEFAULT_TRACK)

    const startAudio = useCallback(async () => {
        if (audioRef.current) {
            await audioRef.current.play()
            setIsPlaying(true)
            return
        }

        const audio = new Audio(currentTrack.src)
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
    }, [currentTrack.src])

    const pauseAudio = useCallback(() => {
        if (!audioRef.current) return

        audioRef.current.pause()
        setIsPlaying(false)
    }, [])

    const selectTrack = useCallback((trackSrc: string) => {
        const nextTrack = DEFAULT_TRACKS.find((track) => track.src === trackSrc)

        if (!nextTrack) {
            return
        }

        setCurrentTrack(nextTrack)

        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.src = nextTrack.src
            audioRef.current.load()
            setIsPlaying(false)
        }
    }, [])

    return {
        analyser: analyserRef,
        dataArray: dataArrayRef,
        isPlaying,
        currentTrack,
        startAudio,
        pauseAudio,
        selectTrack,
    }
}