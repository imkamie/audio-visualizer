export function getFrequencyRange(
  index: number,
  totalBars: number,
  totalBins: number,
) {
  const usableBins = Math.floor(totalBins * 0.7)
  const minBin = 1
  const maxBin = usableBins - 1

  const start = Math.floor((index / totalBars) ** 1.4 * maxBin) + minBin
  const end = Math.floor(((index + 1) / totalBars) ** 1.4 * maxBin) + minBin

  return {
    startIndex: start,
    endIndex: Math.max(end, start + 1),
  }
}
