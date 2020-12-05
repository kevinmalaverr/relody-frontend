class Stack {
  constructor (size, data) {
    this.size = size
    this.data = data || []
  }

  push (element) {
    this.data.push(element)
  }

  pop () {
    return this.data.pop()
  }
}

export default Stack
