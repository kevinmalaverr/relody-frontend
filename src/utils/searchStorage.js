import { SearchQueue } from '../utils/dataStructures/CircularQueue'

class SearchStorage {
  constructor () {
    const json = JSON.parse(window.localStorage.getItem('searches')) || null
    console.log(json)
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
