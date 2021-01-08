export class CircularArray {
  constructor ({ array, head } = {}, size) {
    this.array = array || []
    this.head = head || 0
    this.size = size || 10
  }

  add (item) {
    this.array[this.head] = item
    this.head = (this.head + 1) % this.size
  }

  getAll (reverse) {
    const arr = []
    for (let i = 0; i < this.size; i++) {
      console.log((this.head + i) % this.size)
      const item = this.array[(this.head + i) % this.size]
      item && arr.push(item)
    }

    reverse && arr.reverse()

    return arr
  }
}

export class SearchArray extends CircularArray {
  constructor (data) {
    super(data, 100)
  }

  removeAtIndex (index) {
    2 3 4 0 1
  }

  getFirstsElements (length) {
    const arr = []
    for (let index = 0; index < length; index++) {
      const item = this.array[this.head - 1]
    }
    return arr
  }
}
