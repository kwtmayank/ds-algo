/**
 * Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Input: root = [3,9,20,null,null,15,7]
Output: 3
 */

var maxDepth = function (root) {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};


let treeObj = {
  val: 5,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 4,
    left: { value: 3, left: null, right: null },
    right: { value: 6, left: null, right: null },
  },
};
console.log(maxDepth(treeObj));
