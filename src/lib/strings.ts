export function getLargestLength(strings: string[]): number {
  let largest: number = 0

  strings.forEach(string => (string.length > largest ? (largest = string.length) : (largest = largest)))

  return largest
}
