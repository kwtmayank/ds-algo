import Stack from "../ds/stack/stack.js";

function delElement(stack, k) {
  if (k == 1) {
    stack.pop();
    return stack;
  }

  let temp = stack.pop();
  delElement(stack, k-1);
  stack.push(temp);
  return stack;
}



let exec = (function () {
  let stack = new Stack();

  stack.push(5);
  stack.push(1);
  stack.push(0);
  stack.push(2);

  console.log(stack);
  console.log(delElement(stack, (stack.size/2)+1));

  while(stack.size > 0){
    console.log(stack.pop());
  }
})();
