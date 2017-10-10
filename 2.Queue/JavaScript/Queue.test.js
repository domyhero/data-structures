const Queue = require('./Queue')

const queue = new Queue

console.log(queue.isEmpty()) // true

queue.enqueue("Tom")
queue.enqueue("Bob")

console.log(queue.size())  // 2

queue.dequeue()

queue.print() // "Bob"

const t = new Queue
