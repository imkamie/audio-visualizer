import { Canvas } from '@react-three/fiber'

import { Scene } from './components/Scene'
import { TrackSelect } from './components/TrackSelect'
import { DEFAULT_TRACKS } from './config/audio'
import { useAudio } from './context/useAudio'
import { useVisualizerLayout } from './hooks/useVisualizerLayout'

export default function App() {
  const {
    isPlaying,
    currentTrack,
    startAudio,
    pauseAudio,
    selectTrack,
    uploadTrack,
  } = useAudio()

  const layout = useVisualizerLayout()

  return (
    <div className="app-shell">
      <div className="controls">
        <button
          className="control control-button"
          type="button"
          onClick={isPlaying ? pauseAudio : startAudio}
        >
          {isPlaying ? 'Pause' : 'Start'}
        </button>

        <TrackSelect
          tracks={DEFAULT_TRACKS}
          currentTrack={currentTrack}
          onSelect={selectTrack}
        />

        <label className="control file-control">
          <span>Choose file</span>
          <input
            type="file"
            accept="audio/mpeg,audio/mp3"
            onChange={(event) => {
              const file = event.target.files?.[0]

              if (!file) return

              uploadTrack(file)
            }}
          />
        </label>
      </div>

      <Canvas
        camera={{
          position: [0, layout.cameraY, layout.cameraZ],
          fov: 60,
        }}
        style={{
          width: '100%',
          height: layout.canvasHeight,
          background: '#000',
        }}
      >
        <Scene layout={layout} />
      </Canvas>
    </div>
  )
}
