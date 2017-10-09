// 十进制转二进制
/**
 * 有两个版本：数组版本和栈版本
 * 你可能觉得差不多，但是算法问题就是这样，要习惯用适合的数据结构解决问题
 */

const Stack = require('./Stack')

/*
// 数组版本
const divideBy2 = number => {
  let rem
  let arr = []
  while (number > 0) {
    rem = number % 2
    arr.unshift(rem)
    number = Math.floor(number / 2)
  }

  return arr.join('')
}
*/

// 栈版本
const divideBy2 = number => {
  let stack = new Stack
  let result = ''
  let rem

  while(number > 0) {
    rem = number % 2
    stack.push(rem)
    number = Math.floor(number / 2)
  }

  while(!stack.isEmpty()) {
    result += stack.pop()
  }

  return result
}

console.log('10的二进制:', divideBy2(10))
console.log('100的二进制:', divideBy2(100))
console.log('321的二进制:', divideBy2(321))