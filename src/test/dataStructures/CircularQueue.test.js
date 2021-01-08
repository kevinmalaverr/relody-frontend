import { SearchQueue } from '../../utils/dataStructures/CircularQueue'

describe('Search Queue', () => {
  const search = new SearchQueue()
  for (let i = 0; i < 20; i++) {
    search.enqueue(i)
  }

  search.dequeue()

  test('fun', () => {
    expect(search.peek()).toBe(1)
  })

  test('fun', () => {
    console.log(search)
    expect(search.getLastsElements(10)).toBe(19)
  })
})
