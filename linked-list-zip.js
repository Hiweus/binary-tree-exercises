class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function show(node) {
  let cursor = node
  while(cursor !== null) {
    console.log(cursor.val)
    cursor = cursor.next
  }
}

function zipList(nodeA, nodeB) {
  let currentA = nodeA
  let currentB = nodeB
  
  while(currentA !== null && currentB !== null) {
    const nextA = currentA.next
    const nextB = currentB.next

    if(currentB !== null) currentA.next = currentB
    if(nextA !== null) currentB.next = nextA

    currentA = nextA
    currentB = nextB
  }

  return nodeA
}

const f = new Node('f')
const e = new Node('e', f)
const d = new Node('d', e)
const c = new Node('c', d)
const b = new Node('b', c)
const a = new Node('a', b)

const r = new Node('r')
const q = new Node('q', r)

console.log(show(zipList(a, q)))