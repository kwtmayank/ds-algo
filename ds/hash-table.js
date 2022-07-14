class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
  }

  get(key) {
    let address = this._hash(key);
    let currentAddress = this.data[address];
    if (currentAddress) {
      for (let i = 0; i < currentAddress.length; i++) {
        if (currentAddress[i][0] === key) {
          return currentAddress[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      let currentAddress = this.data[i];
      if (currentAddress) {
        for (let i = 0; i < currentAddress.length; i++) {
          keysArr.push(currentAddress[i][0]);
        }
      }
    }
    return keysArr;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 49);

console.log(myHashTable.keys());
