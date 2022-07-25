// program to display fibonacci sequence using recursion
function fibonacci(num) {
  //O(2^N) it takes exponential time. Can be improved with DP
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

function fibonacciMaster() {
  const cache = {};
  return function fib(num) {
    if (num < 2) {
      return num;
    }
    if (cache.hasOwnProperty(num)) {
      return cache[num];
    } else {
      cache[num] = fib(num - 1) + fib(num - 2);
      return cache[num];
    }
  };
}

function fibonacciUsingLoop(n) {
  //O(n)
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}

// take nth term input from the user
const nTerms = 48;

if (nTerms <= 0) {
  console.log("Enter a positive integer.");
} else {
  const fibFn = fibonacciMaster();
  console.log(fibFn(nTerms));
}
