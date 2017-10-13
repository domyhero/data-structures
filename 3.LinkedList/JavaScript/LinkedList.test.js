const LinkedList = require('./LinkedList')

var list = new LinkedList
list.append(1)
list.append(2)
list.append(3)

console.log(list.size())
list.insert(0, 1)
list.insert(1, 2)

list.removeAt(1)

list.remove(1)
list.print()