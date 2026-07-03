export function getAverageFrequency(
  frequencies: Uint8Array<ArrayBuffer>,
  startIndex: number,
  endIndex: number,
) {
  let sum = 0
  let count = 0

  for (let i = startIndex; i < endIndex && i < frequencies.length; i++) {
    sum += frequencies[i]
    count++
  }

  return count === 0 ? 0 : sum / count
}
