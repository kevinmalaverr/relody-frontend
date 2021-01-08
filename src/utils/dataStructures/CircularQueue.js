export class CircularQueue {
/**
 * @param {number} size Maximum size of the queue.
 * @param {?Object} data contruct object from previous data.
 */
  constructor (size, data) {
    if (data) {
      // if gets data this will be used in the object
      Object.assign(this, data)
    } else {
      this.size = size
      this.queue = []
      this.head = -1
      this.tail = -1
    }
  }

  /**
   * @param {*} value data to enqueue.
   */
  enqueue (value) {
    if ((this.tail + 1) % this.size === this.head) {

    } else if (this.head === -1) {
      this.head = 0
      this.tail = 0
      this.queue[this.tail] = value
    } else {
      this.tail = (this.tail + 1) % this.size
      this.queue[this.tail] = value
    }
  }

  /**
   * @returns {*} item at head an remove it
   */
  dequeue () {
    if (this.head === -1) {

    } else if (this.head === this.tail) {
      const temp = this.queue[this.head]
      this.head = -1
      this.tail = -1
      return temp
    } else {
      const temp = this.queue[this.head]
      this.head = (this.head + 1) % this.size
      return temp
    }
  }

  /**
   * @returns {*} item at head
   */
  peek () {
    return this.queue[this.head]
  }
}

export class SearchQueue extends CircularQueue {
  /**
   * @param {?Object} data contruct object from previous data.
   */
  constructor (data) {
    super(100, data)
  }

  /**
   * @param {number} length
   * @returns {Array<*>} array of last queued elements
   */
  getLastsElements (length) {
    const arr = []
    let index = this.tail + 1
    let i = 0
    let item
    while (i < length) {
      if (index <= 0) index = this.size - 1
      index--
      i++

      item = this.queue[index]
      if (typeof item === 'undefined') return arr
      arr.push(this.queue[index])
    }
    return arr
  }
}
