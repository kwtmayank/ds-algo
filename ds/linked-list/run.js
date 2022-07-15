import DoublyLinkedList from "./doubly-linked-list.js";
import LinkedList from "./linked-list.js";

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(2);
// console.log(myLinkedList.print());
// myLinkedList.insert(2, 50);
// console.log(myLinkedList.print());
// myLinkedList.insert(0, 150);
// console.log(myLinkedList.print());
// myLinkedList.insert(1, 1);
// console.log(myLinkedList.print());
// myLinkedList.remove(1);
// console.log(myLinkedList.print());
// myLinkedList.remove(0);
// console.log(myLinkedList.print());
// myLinkedList.remove(3);
// console.log(myLinkedList.print());

const doublyLinkedList = new DoublyLinkedList(20);
doublyLinkedList.append(30);
doublyLinkedList.append(40);
doublyLinkedList.prepend(10);
doublyLinkedList.insert(2, 90);
console.log(doublyLinkedList.print());
doublyLinkedList.remove(2, 90);
console.log(doublyLinkedList.print());
