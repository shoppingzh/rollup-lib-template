import { add } from '../../src'


describe('add', () => {
  test('positive', () => {
    expect(add(1, 1)).toBe(2)
  })

  test('negative', () => {
    expect(add(-1, -1)).toBe(-2)
  })
})
