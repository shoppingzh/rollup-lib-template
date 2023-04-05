import { hello } from '../src/index'

describe('hello', () => {
  it('hello', () => {
    expect(hello()).toBe('hello')
  })
})
