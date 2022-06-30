const methodName = "factorial";

let result = 1;
function factorial(n) {
  if (n >= 1) {
    result = n * factorial(n - 1);
  }
  return result;
}

console.time(methodName);
console.info(factorial(4));
console.timeEnd(methodName);
