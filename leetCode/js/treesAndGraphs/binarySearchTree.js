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

  search(element) {
      if(this.val === element){
          return true
      } else if (this.val > element && this.left) {
          return this.left.search(element)
      } else if (this.val < element && this.right) {
          return this.right.search(element)
      }

      return false
    //   element does not exist in the tree
  }
}

module.exports = {
  BST : BST
}

