export default class StackArray {
  constructor() {
    this._data = [];
  }

  push(value) {
    this._data.push(value);
  }

  pop() {
    return this._data.pop();
  }

  peek() {
    return this._data[this._data.length - 1];
  }
}
