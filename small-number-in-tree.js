class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}


function buildTree() {
  const a = new Node(34)
  const b = new Node(111)
  const c = new Node(44)
  const d = new Node(23)
  const f = new Node(45)
  const g = new Node(133)
  a.left = b
  b.left = c
  b.right = d
  a.right = f
  f.right = g
  
  return a
}

function smallestNumber(node) {
  if(node === null) return Infinity
  const current = Number(node.val)
  const left = smallestNumber(node.left)
  const right = smallestNumber(node.right)

  let minimum = current
  if(minimum > left) minimum = left
  if(minimum > right) minimum = right

  return minimum
}

const root = buildTree()
console.log(smallestNumber(root))



