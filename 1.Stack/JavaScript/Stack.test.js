const Stack = require('./Stack')

const stack = new Stack

console.log('栈是否为空', stack.isEmpty()) // true

stack.push(11)
stack.push(22)

console.log('栈顶为', stack.peek()) // 22

console.log('栈内元素个数', stack.size()) // 2

console.log('栈是否为空', stack.isEmpty()) // false

stack.pop()

console.log('栈内元素个数', stack.size()) // 1

stack.print() // 11