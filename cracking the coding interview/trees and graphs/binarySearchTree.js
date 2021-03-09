/*

Create a Binary Search Tree from scratch

*/

class BinarySearchTree {
    constructor() {
        this.root = null
    }
}

insertNode(val) {
    const node = {
        data: val,
        left: null,
        right: null
    }

    const currentNode

    if (!this.root) {
    this.root = node;
    } else {
        currentNode = this.root
    }
    while (currentNode) {
        if (val < currentNode.left) {
            if (!currentNode.left) {
                currentNode.left = node;
                break; 
            } else {
                currentNode = currentNode.left
            }
        } else if (val > currentNode.data) {
            if (!currentNode.right) {
                currentNode.right = node
                break; 
            } else {
                currentNode = currentNode.right
            }
        } else {
            console.log('ignore val as BST contains only unique values')
        }
    }
}

