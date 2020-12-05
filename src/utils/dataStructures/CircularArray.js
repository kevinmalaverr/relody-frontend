class CircularArray {
  constructor ({ size, array, head } = {}) {
    this.array = array || []
    this.head = head || 0
    this.size = size || 5
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

export default CircularArray
