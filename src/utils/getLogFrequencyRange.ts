export function getLogFrequencyRange(
  index: number,
  totalBars: number,
  totalBins: number,
) {
  const minIndex = 1
  const maxIndex = totalBins

  const start = minIndex * Math.pow(maxIndex / minIndex, index / totalBars)

  const end = minIndex * Math.pow(maxIndex / minIndex, (index + 1) / totalBars)

  return {
    startIndex: Math.floor(start),
    endIndex: Math.min(Math.floor(end), totalBins),
  }
}
