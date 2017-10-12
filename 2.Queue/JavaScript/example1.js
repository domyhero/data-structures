// 循环队列

/**
 * 击鼓传花游戏
 * 实现 hotPotato()
 */

const Queue = require('./Queue')

const hotPotato = (list, num) => {
  let queue = new Queue

  for(let i=0; i<list.length; i++) {
    queue.enqueue(list[i])
  }

  let winner = ''
  let loser = ''

  while(queue.size() > 1) {
    for(let i=0; i<num; i++) {
      queue.enqueue(queue.dequeue())
    }

    loser = queue.dequeue()
    console.log(`${loser} 被淘汰`)
  }

  return queue.front()
}

let names = ['Tom', 'Bob', 'Jack', 'Carl', 'John']
let winner = hotPotato(names, 7)  // 数 7 淘汰一次
console.log(winner) // Tom