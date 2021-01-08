class Stack {
  constructor ({ size, data } = {}) {
    this.size = size || 0
    this.data = data || []
  }

  push (element) {
    this.size++
    this.data.push(element)
  }

  pop () {
    this.size--
    return this.data.pop()
  }

  get (index) {
    return this.data[index]
  }

  getFirsts (length) {
    const arr = new Array(length)
    for (let index = 0; index < length; index++) {
      arr[length - index - 1] = this.get(this.size - index)
    }
    return arr
  }
}

export default Stack
