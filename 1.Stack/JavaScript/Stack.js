class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    const len = this.items.length
    return this.items[len-1]
  }

  isEmpty() {
    return this.items.length == 0
  }

  clear() {
    this.items.length = 0
  }

  size() {
    return this.items.length
  }

  print() {
    console.log(this.items.toString())
  }
}

module.exports = Stack