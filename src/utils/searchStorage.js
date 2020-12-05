import CircularArray from '../utils/dataStructures/CircularArray'

class SearchStorage {
  constructor () {
    const json = JSON.parse(window.localStorage.getItem('searches'))
    this.storage = new CircularArray(json)
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
