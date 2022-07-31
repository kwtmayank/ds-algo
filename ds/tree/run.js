import BinarySearchTree from "./binary-search-tree.js";

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//console.log(JSON.stringify(tree.traverse(tree.root)));
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
    right: { value: 6, left: null, right: null }
  },
};
console.log(
  tree.validateBST(treeObj, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
);
//console.log(tree.depthFirstSearchInPreOrder(tree.root, []));
//console.log(tree.depthFirstSearchInPostOrder(tree.root, []));
