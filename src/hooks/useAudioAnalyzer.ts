import { useRef, useState } from 'react'

export function useAudioAnalyzer() {
    const analyserRef = useRef<AnalyserNode | null>(null)
    const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const contextRef = useRef<AudioContext | null>(null)

    const [isPlaying, setIsPlaying] = useState(false)

    async function startAudio() {
        if (audioRef.current) {
            await audioRef.current.play()
            setIsPlaying(true)
            return
        }

        const audio = new Audio('/no-copyright-music.mp3')
        audio.loop = true

        const context = new AudioContext()
        const source = context.createMediaElementSource(audio)
        const analyser = context.createAnalyser()

        analyser.fftSize = 256

        source.connect(analyser)
        analyser.connect(context.destination)

        analyserRef.current = analyser
        dataArrayRef.current = new Uint8Array(new ArrayBuffer(analyser.frequencyBinCount))
        audioRef.current = audio
        contextRef.current = context

        await context.resume()
        await audio.play()

        setIsPlaying(true)
    }

    return {
        analyser: analyserRef,
        dataArray: dataArrayRef,
        isPlaying,
        startAudio,
    }
}