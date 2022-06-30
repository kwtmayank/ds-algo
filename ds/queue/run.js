import Queue from "./queue.js";

let queue = new Queue();
console.log(queue);
console.log(queue.dequeue());
console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(50));
console.log(queue.enqueue(40));
console.log(queue.size);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size);
