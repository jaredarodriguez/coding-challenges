/*

Given the root of a binary tree, return the inorder traversal of its nodes' values

Example:
Input: root = [1, null, 2, 3]
Output = 1, 3, 2

In-order Traversal : left ==> root ==> right (can retrieve all data in sorted order)

*/
let binarySearchTree = require('./binarySearchTree')
let BST = binarySearchTree.BST

const inOrderTraversal = function (root) {
  let res = [];

  function inOrderHelper(el) {
    if (el !== null) {
      inOrderHelper(el.left);
        res.push(el.val)
      inOrderHelper(el.right);
    }
  }

  inOrderHelper(root)
  return res
};

const bst = new BST(10);
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(50);
bst.insert(3);
bst.insert(7);
bst.insert(12);

const inOrderBST = inOrderTraversal(bst)
console.log(inOrderBST)