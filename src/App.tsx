import { Canvas } from '@react-three/fiber'

import { Scene } from './components/Scene'
import { DEFAULT_TRACKS } from './config/audio'
import { useAudio } from './context/useAudio'

export default function App() {
  const {
    isPlaying,
    currentTrack,
    startAudio,
    pauseAudio,
    selectTrack,
    uploadTrack,
  } = useAudio()

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 20,
          left: 20,
          zIndex: 1,
          display: 'flex',
          gap: 8,
        }}
      >
        <button type="button" onClick={isPlaying ? pauseAudio : startAudio}>
          {isPlaying ? 'Pause' : 'Start'}
        </button>

        <select
          value={currentTrack.src}
          onChange={(event) => selectTrack(event.target.value)}
        >
          {DEFAULT_TRACKS.map((track) => (
            <option key={track.id} value={track.src}>
              {track.title}
            </option>
          ))}
        </select>

        <input
          type="file"
          accept="audio/mpeg,audio/mp3"
          onChange={(event) => {
            const file = event.target.files?.[0]

            if (!file) return

            uploadTrack(file)
          }}
        />
      </div>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ width: '100vw', height: '100vh', background: '#000' }}
      >
        <Scene />
      </Canvas>
    </>
  )
}
