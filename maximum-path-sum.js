class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}


function buildTree() {
  const a = new Node(5)
  const b = new Node(11)
  const c = new Node(4)
  const d = new Node(2)
  const f = new Node(3)
  const g = new Node(1)
  a.left = b
  b.left = c
  b.right = d
  a.right = f
  f.right = g
  
  return a
}

function maximumPathSum(node) {
  if(node === null) return 0

  const left = maximumPathSum(node.left)
  const right = maximumPathSum(node.right)
  const maximum = left > right ? left : right

  return Number(node.val) + maximum
  
}

const root = buildTree()
const SEARCH = 111
console.log(maximumPathSum(root))



