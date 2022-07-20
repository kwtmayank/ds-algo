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
console.log(tree.lookup(90));
