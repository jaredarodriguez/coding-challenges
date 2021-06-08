class Node {
    constuctor(val) {
        this.val = val
    }
}

class BST {
  constructor(val) {
    this.val = val
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (val < this.val && !this.left) {
      this.left= new BST(val);
    } else if (val < this.val && this.left) {
      this.left.insert(val);
    } else if (val > this.val && !this.right) {
      this.right = new BST(val);
    } else if (val > this.val && this.right) {
      this.right.insert(val);
    }
  }
}

let rootNode = new BST(10)
rootNode.insert(8)
rootNode.insert(11)
rootNode.insert(6)
console.log(rootNode)