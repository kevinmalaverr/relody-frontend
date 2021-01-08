import { SearchQueue } from '../utils/dataStructures/CircularQueue'

class SearchStorage {
  constructor () {
    const json = JSON.parse(window.localStorage.getItem('searches')) || {}
    console.log(json)
    this.storage = new SearchQueue().ge
  }

  getStorage () {
    return this.storage.getAll(true)
  }

  addItem (item) {
    this.storage.add(item)
    window.localStorage.setItem('searches', JSON.stringify(this.storage))
  }
}

const searchStorage = new SearchStorage()
Object.freeze(searchStorage)

export default searchStorage
