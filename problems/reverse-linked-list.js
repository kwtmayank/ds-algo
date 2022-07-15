import LinkedList from "../ds/linked-list/linked-list.js";

function reverse(linkedList) {
  if (linkedList.length <= 1) {
    return linkedList;
  }

  let first = linkedList.head;
  let second = first.next;

  linkedList.tail = linkedList.head;

  while (second) {
    let temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }

  linkedList.head.next = null;
  linkedList.head = first;
}

const list = new LinkedList(5);
list.append(10);
list.append(2);
list.append(20);

reverse(list);
console.log(list.print());
