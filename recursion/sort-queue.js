import Queue from "../ds/queue/queue.js";

function sort(queue) {
  if (queue.size == 1) {
    return queue;
  }

  let temp = queue.dequeue();
  sort(queue);
  insert(queue, temp);
  return queue;
}

function insert(tempQueue, val) {
  if (tempQueue.size == 0 || tempQueue.peek() < val) {
    tempQueue.enqueue(val);
    return tempQueue;
  }

  let temp = tempQueue.dequeue();
  insert(tempQueue, val);
  tempQueue.enqueue(temp);
  return tempQueue;
}

let exec = (function () {
  let queue = new Queue();

  queue.enqueue(5);
  queue.enqueue(1);
  queue.enqueue(0);
  queue.enqueue(2);

  console.log(queue);
  console.log(sort(queue));
})();
