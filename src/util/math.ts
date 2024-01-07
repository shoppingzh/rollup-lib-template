export function plus(a: number, b: number) {
  return new Promise<number>((resolve, reject) => {
    const sum = a + b
    if (Number.isNaN(sum)) {
      reject()
      return
    }
    resolve(sum)
  })
}
