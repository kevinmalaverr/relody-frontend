import { SearchQueue } from '../../utils/dataStructures/CircularQueue'

describe('Search Queue', () => {
  const search = new SearchQueue()
  for (let i = 0; i < 5; i++) {
    search.enqueue(i)
  }

  test('peek', () => {
    expect(search.peek()).toBe(0)
  })

  test('getLastElements', () => {
    expect(search.getLastsElements(10)).toStrictEqual([4, 3, 2, 1, 0])
  })
})
