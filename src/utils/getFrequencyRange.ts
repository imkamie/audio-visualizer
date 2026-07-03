export function getFrequencyRange(
  index: number,
  totalBars: number,
  totalBins: number,
) {
  const maxIndex = totalBins - 1

  const start = Math.floor((index / totalBars) ** 1.8 * maxIndex)
  const end = Math.floor(((index + 1) / totalBars) ** 1.8 * maxIndex)

  return {
    startIndex: start,
    endIndex: Math.max(end, start + 1),
  }
}
