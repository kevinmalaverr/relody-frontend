import { SearchQueue } from '../utils/dataStructures/CircularQueue'

function isWindow () {
  if (typeof window === 'undefined') return false
  else return true
}

class SearchStorage {
  constructor () {
    const json = isWindow() ? JSON.parse(window.localStorage.getItem('searches')) : null
    this.storage = new SearchQueue(json)
  }

  getStorage () {
    return this.storage.getLastsElements(10)
  }

  addItem (item) {
    this.storage.enqueue(item)
    window.localStorage.setItem('searches', JSON.stringify(this.storage))
  }
}

const searchStorage = new SearchStorage()
Object.freeze(searchStorage)

export default searchStorage
