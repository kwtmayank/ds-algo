import Node from "../node.js";
export default class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.first == null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++ ;
  }

  dequeue() {
    if (this.first == null) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  peek() {
    if (this.first == null) return null;
    return this.first.value;
  }
}
