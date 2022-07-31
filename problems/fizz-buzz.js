/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/

var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let rem3 = i % 3;
    let rem5 = i % 5;

    if (rem3 === 0 && rem5 === 0) {
      result.push("FizzBuzz");
    } else if (rem3 === 0) {
      result.push("Fizz");
    } else if (rem5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
};

console.log(fizzBuzz(15));
