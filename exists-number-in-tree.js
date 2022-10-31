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

function existsInTree(node, search) {
  if(node === null) return false
  if(node.val === search) return true
  
  return existsInTree(node.left, search) || existsInTree(node.right, search)
}

const root = buildTree()
const SEARCH = 111
console.log(existsInTree(root, SEARCH))



