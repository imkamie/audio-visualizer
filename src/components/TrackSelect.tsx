import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

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
  const selectRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isOpen) return

    function handlePointerDown(event: PointerEvent) {
      if (!selectRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div className="track-select" ref={selectRef}>
      <button
        className="control track-select-button"
        type="button"
        aria-expanded={isOpen}
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
