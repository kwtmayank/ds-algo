import Element from "../element.js";
export default class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  push(value) {
    const element = new Element(value);
    if (this.first == null) {
      this.first = element;
      this.last = element;
    } else {
      let temp = this.first;
      this.first = element;
      this.first.next = temp;
    }
    this.size++;
  }

  pop() {
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
