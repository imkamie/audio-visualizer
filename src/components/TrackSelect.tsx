import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import type { Track } from '../config/audio'

type TrackSelectProps = {
  tracks: Track[]
  currentTrack: Track
  onSelect: (src: string) => void
}

export function TrackSelect({
  tracks,
  currentTrack,
  onSelect,
}: TrackSelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="track-select">
      <button
        className="control track-select-button"
        type="button"
        onClick={() => setIsOpen((value) => !value)}
      >
        <span>{currentTrack.title}</span>

        <ChevronDown
          className={
            isOpen
              ? 'track-select-arrow track-select-arrow--open'
              : 'track-select-arrow'
          }
          size={22}
          strokeWidth={2.25}
        />
      </button>

      {isOpen && (
        <div className="track-select-menu">
          {tracks.map((track) => (
            <button
              key={track.id}
              className={
                track.src === currentTrack.src
                  ? 'track-select-option track-select-option--active'
                  : 'track-select-option'
              }
              type="button"
              onClick={() => {
                onSelect(track.src)
                setIsOpen(false)
              }}
            >
              {track.title}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
