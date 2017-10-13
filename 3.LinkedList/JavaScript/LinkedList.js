class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  _node(element) {
    return{
      element,
      next: null
    }
  }

  append(element) {
    let node = this._node(element)

    if(this.head == null) {
      this.head = node
    }else {
      let current = this.head

      while(current.next) {
        current = current.next
      }

      current.next = node
    }

    this.length++

  }

  insert(pos, element) {
    if(pos >= 0 && pos <= this.length) {
      let node = this._node(element)
      let current = this.head

      if(pos == 0) {
        node.next = current
        this.head = node
      }else {
        let index = 0
        let prev = null
        let current = this.head

        while(pos > index++) {
          prev = current
          current = current.next
        }

        node.next = current
        prev.next = node

        this.length++

        return true
      }
    }else {
      return false
    }
  }

  removeAt(pos) {
    if(pos > -1 && pos < this.length) {
      let current = this.head
      if(pos == 0) {
        current = current.next
      }else {
        let index = 0
        let prev = null

        while(pos > index++) {
          prev = current
          current = current.next
        }

        prev.next = current.next
      }

      this.length--

      return current.element
    }else {
      return null
    }
  }

  remove(element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  indexOf(element) {
    let current = this.head
    let index = 0
    let pos = -1

    while(current) {
      index++
      if(element == current.element) {
        pos = index
        break
      }else {
        current = current.next
      }
    }

    return pos
  }

  isEmpty() {
    return this.length == 0
  }

  size() {
    return this.length
  }

  getHead() {
    return this.head
  }

  print() {
    let current = this.head
    let string = ''
    while(current) {
      string += `${current.element}`
      current = current.next
    }
    console.log(string)
  }
}

module.exports = LinkedList





