/**
 * 优先队列
 */

class PriorityQueue {
  constructor() {
    this.items = []
  }

  // priortity 越大，优先级越低
  enqueue(element, priority) {
    let queueElement = {
      element,
      priority
    }

    let isAdd = false

    for(let i=0; i<this.items.length; i++) {
      if(queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement)
        isAdd = true
        break
      }
    }

    if(!isAdd) {
      this.items.push(queueElement)
    }
  }

  print() {
    for(let i=0; i<this.items.length; i++) {
      console.log(this.items[i].element, this.items[i].priority)
    }
  }

  /* 其他与普通队列相同 */

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  isEmpty() {
    return this.items.length == 0
  }

  size() {
    return this.items.length
  }
}

module.exports = PriorityQueue