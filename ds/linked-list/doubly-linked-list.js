import Node from "../node.js";

export default class DoublyLinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }

  append(val) {
    if (this.tail) {
      let temp = new Node(val, null, this.tail);
      this.tail.next = temp;
      this.tail = temp;
      this.length++;
    }
  }

  prepend(val) {
    if (this.head) {
      let newHead = new Node(val, this.head);
      this.head.prev = newHead;
      this.head = newHead;
      this.length++;
    }
  }

  print() {
    const listArr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      listArr.push({
        value: currentNode.value,
        next: currentNode.next ? currentNode.next.value : null,
        prev: currentNode.prev ? currentNode.prev.value : null,
      });
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
    let leaderNode = this.getNodeAtIndex(index - 1);
    let followerNode = leaderNode.next;
    leaderNode.next = newNode;
    newNode.prev = leaderNode;
    followerNode.prev = newNode;
    newNode.next = followerNode;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let leaderNode = this.getNodeAtIndex(index - 1);
    let tobeRemoved = leaderNode.next;
    let afterFollowerNode = tobeRemoved.next;

    leaderNode.next = tobeRemoved.next;
    afterFollowerNode.prev = leaderNode;

    this.length--;
  }
}
