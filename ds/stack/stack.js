import Node from "../node.js";

export default class Stack {
  constructor() {
    this.size = 0;
    this.top = null;
    this.bottom = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.top == null) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.size++;
  }

  pop() {
    if (this.top == null) return null;
    let temp = this.top;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.size--;
    return temp.value;
  }

  peek() {
    if (this.top == null) return null;
    return this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}
