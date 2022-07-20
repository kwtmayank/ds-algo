// program to display fibonacci sequence using recursion
function fibonacci(num) {
  //O(2^N) it takes exponential time
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
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
  console.log(fibonacci(nTerms));
}
