import LinkList from "../ds/link-list/link-list.js";

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let head = null;
  let current = null;

  return sum(l1, l2, head, current, carry);
};

function sum(l1, l2, head, current, carry) {
  if (l1 === null && l2 === null) {
    if (carry > 0) {
      let carryNode = new ListNode(carry);
      current.next = carryNode;
      current = carryNode;
    }
    return head;
  }

  let firstVal = l1 ? l1.val : 0;
  let secondVal = l2 ? l2.val : 0;

  let addition = firstVal + secondVal + carry;

  carry = Math.floor(addition / 10);
  let value = addition % 10;

  let tmpNode = new ListNode(value);

  if (head === null) {
    head = tmpNode;
    current = tmpNode;
  } else {
    current.next = tmpNode;
  }
  current = tmpNode;

  return sum(l1 ? l1.next : null, l2 ? l2.next : null, head, current, carry);
}

addTwoNumbers();
