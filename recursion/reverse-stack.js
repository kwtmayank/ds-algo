import Stack from "../ds/stack/stack.js";

function reverse(stack) {
  if (stack.size == 1) {
    return stack;
  }

  let temp = stack.pop();
  reverse(stack);
  insert(stack, temp);
  return stack;
}

function insert(tempStack, val) {
  if (tempStack.size == 0) {
    tempStack.push(val);
    return tempStack;
  }

  let temp = tempStack.pop();
  insert(tempStack, val);
  tempStack.push(temp);
  return tempStack;
}

let exec = (function () {
  let stack = new Stack();

  stack.push(5);
  stack.push(1);
  stack.push(0);
  stack.push(2);

  console.log(stack);
  console.log(reverse(stack));
  while (stack.size > 0) {
    console.log(stack.pop());
  }
})();
