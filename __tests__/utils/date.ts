import { isAfter } from '../../src'


describe('isAfter', () => {
  test('normal', () => {
    const a = new Date()
    const b = new Date()
    b.setMilliseconds(b.getMilliseconds() + 1)
    expect(isAfter(a, b)).toBeTruthy()
  })
})
