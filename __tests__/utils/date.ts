import { now } from '../../src/utils/date'

describe('now', () => {
  it('base', () => {
    expect(now()).toBe(Date.now())
  })
})
