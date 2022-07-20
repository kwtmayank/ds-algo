import HashTable from "./hash-table.js";

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 49);

console.log(myHashTable.keys());
