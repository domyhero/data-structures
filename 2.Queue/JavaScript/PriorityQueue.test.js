const PriorityQueue = require('./PriorityQueue')

const priorityQueue = new PriorityQueue

priorityQueue.enqueue('Tom', 2)
priorityQueue.enqueue('Bob', 1)
priorityQueue.enqueue('R', 1)
priorityQueue.print()

/*
  Bob 1
  R 1
  Tom 2
*/