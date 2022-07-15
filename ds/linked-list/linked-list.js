import Node from "../node.js";

export default class LinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }

  append(val) {
    if (this.tail) {
      let temp = new Node(val);
      this.tail.next = temp;
      this.tail = temp;
      this.length++;
    }
  }

  prepend(val) {
    if (this.head) {
      let newHead = new Node(val, this.head);
      this.head = newHead;
      this.length++;
    }
  }

  print() {
    const listArr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      listArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listArr;
  }

  getNodeAtIndex(index) {
    if (index === 0) {
      return this.head;
    }

    if (index >= this.length) {
      return this.tail;
    }

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let currentNode = this.getNodeAtIndex(index - 1);
    [currentNode.next, newNode.next] = [newNode, currentNode.next];
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.getNodeAtIndex(index - 1);
    currentNode.next = currentNode.next.next;
    this.length--;
  }
}
