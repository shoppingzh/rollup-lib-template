import { plus } from '../src/index'

describe('plus', () => {
  it('base', async() => {
    expect(await plus(1, 1)).toBe(2)
  })
})
