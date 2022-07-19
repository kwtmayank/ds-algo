class MyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  push(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this.last;
  }

  pop() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    return this.first.pop();
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }

  empty() {
    return this.first.length === 0 && this.last.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 *
 * */
var obj = new MyQueue();
console.log(obj.push("x"));
console.log(obj.push("y"));
console.log(obj.pop());
console.log(obj.peek());
console.log(obj.empty());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.empty());
