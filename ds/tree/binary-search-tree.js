import TreeNode from "./tree-node.js";

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value === newNode.value) {
        //Duplicate not allowed
        console.log("Duplicate not allowed");
        currentNode = null;
        return this;
      }

      if (newNode.value > currentNode.value) {
        //move to right side
        if (!currentNode.right) {
          currentNode.right = newNode;
          currentNode = null;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        //move to left side
        if (!currentNode.left) {
          currentNode.left = newNode;
          currentNode = null;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }
  lookup(value) {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (value > currentNode.value) {
        //right
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        //left
        currentNode = currentNode.left;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : this.traverse(node.left);
    tree.right = node.right === null ? null : this.traverse(node.right);
    return tree;
  }
}

//     9
//  4     20
//1  6  15  170
