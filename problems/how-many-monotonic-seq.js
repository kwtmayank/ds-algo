/*

A monotonic sequence of numbers is either a continuously ascending sequence or a continuously descending sequence. Write a function that given an array of integers, it returns how many monotonic sequences it’s built of. For example :

1 3 5 10 -> One monotonic sequence
7 4 2 2 1 -> One monotonic sequence
5 3 1 5 6 7 -> Two monotonic sequences
1 2 3 1 2 1 2 3 -> Two monotonic sequences

*/

function findMonotonicSeq(input) {
  let result = 1;
  let curr = null;
  let prev = null;

  if (input === null || input.length === 0) {
    return 0;
  }

  if (input.length === 1) {
    return 1;
  }

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] <= input[i + 1]) {
      curr = true;
    } else {
      curr = false;
    }

    if (prev === null) {
      prev = curr;
    }

    if (curr != prev) {
      result++;
    }

    prev = curr;
  }

  return result;
}

let ip = [5, 3, 1, 5, 6, 7];
console.log(findMonotonicSeq(ip));
