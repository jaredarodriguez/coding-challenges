let binarySearchTree = require('./binarySearchTree')
let BST = binarySearchTree.BST


const preOrder = (root) => {
    let res = [];

    function preOrderHelper(node) {
        if (node.val !== null) {
            res.push(node.val)
            if (node.left.val !== null) {
                preOrderHelper(node.left)
            }
            if (node.right.val !== null) {
                preOrderHelper(node.right)
            }
        }
    }

    preOrder(root)
    return res

}


let tree = new BST(20)
tree.insert(20);
tree.insert(14);
tree.insert(57);
tree.insert(9);
tree.insert(19);
tree.insert(31);
tree.insert(62);
tree.insert(3);
tree.insert(11);
tree.insert(72);

const preOrderTree = preOrder(tree)
console.log(preOrderTree)