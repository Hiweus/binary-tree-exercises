class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}


function buildTree() {
  const a = new Node(3)
  const b = new Node(11)
  const c = new Node(4)
  const d = new Node(2)
  const f = new Node(4)
  const g = new Node(1)
  a.left = b
  b.left = c
  b.right = d
  a.right = f
  f.right = g
  
  return a
}

function treeSum(node) {
  if(node === null) return 0
  return Number(node.val) + treeSum(node.left) + treeSum(node.right)
}

const root = buildTree()
console.log(treeSum(root))



