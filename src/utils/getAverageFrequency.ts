export function getAverageFrequency(
    frequencies: Uint8Array<ArrayBuffer>,
    startIndex: number,
    endIndex: number
) {
    if (startIndex >= endIndex) {
        return 0
    }

    let sum = 0

    for (let i = startIndex; i < endIndex; i++) {
        sum += frequencies[i]
    }

    return sum / (endIndex - startIndex)
}