/*

Given the root of a binary tree, return the preorder traversal of its nodes' values.


Example :
Input: root = [1, null, 2, 3]
Output: [1, 2, 3]

Input: root = []
Output: []

Input: root = [1]
Output: [1]

*/

const preorderTraversal = function (root) {
  if (root == null) {
    return [];
  }

  const stack = [];
  const result = [];

  stack.push(root);

  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
};
