import Stack from '../../utils/dataStructures/Stack'

describe('Stack', () => {
  const stack = new Stack()
  stack.push('a')
  stack.push('b')
  stack.push('c')

  test('Should return 3', () => {
    expect(stack.pop()).toBe('c')
  })
})
