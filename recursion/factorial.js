const methodName = "factorial";

let result = 1;
function factorial(n) {
  if (n >= 1) {
    result = n * factorial(n - 1);
  }
  return result;
}

function factorialUsingLoop(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

console.time(methodName);
console.info(factorialUsingLoop(5));
console.timeEnd(methodName);
