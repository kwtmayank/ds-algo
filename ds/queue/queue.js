import Element from "../element.js";
export default class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const element = new Element(value);
    if (this.head == null) {
      this.head = element;
      this.tail = element;
    } else {
      this.tail.next = element;
      this.tail = element;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.head == null) return null;
    let temp = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return temp.value;
  }

  peek() {
    if (this.head == null) return null;
    return this.head.value;
  }
}
