import { useAudioAnalyzer } from '../hooks/useAudioAnalyzer'
import { AudioContext } from './AudioContext'

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audio = useAudioAnalyzer()

  return <AudioContext.Provider value={audio}>{children}</AudioContext.Provider>
}
