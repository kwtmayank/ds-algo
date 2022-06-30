function printOneToN(n) {
  if (n === 1) {
    console.log(n);
  } else {
    printOneToN(n - 1);
    console.log(n);
  }
}

function printNToOne(n) {
  if (n === 1) {
    console.log(n);
  } else {
    console.log(n);
    printNToOne(n - 1);
  }
}

console.time("printOneToN");
printOneToN(5);
console.timeEnd("printOneToN");

console.time("printNToOne");
printNToOne(5);
console.timeEnd("printNToOne");
