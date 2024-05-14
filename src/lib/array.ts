export function allNumSum(arr: number[]): number {
  let num = 0

  arr.forEach(n => (num += n))

  return num
}
