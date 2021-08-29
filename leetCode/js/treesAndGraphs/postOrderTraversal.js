/*

Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: root = [1, null, 2, 3]
Output: [3, 2, 1]

Input: root = [1, null, 2]
Output: [2, 1]

*/

const postorderTraversal = (root) => {
  let res = [];
  let stack = [f, b, a];

  while (root.left !== null) {
    stack.push(root.left);
  }

  while (stack.length) {
    let node = stack[stack.length - 1]
    while (node.right !== null) {
        stack.push(node.right)
    }
  }


};

/*

res = [a]
f ==> b ==> a

*/


const postOrder = () => {
    let visited = [],
        current = this.root;

    let traverse = node => {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
  }
