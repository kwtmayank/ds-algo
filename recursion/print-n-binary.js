function solve(ones, zeros, noOfDigits, output, arr) {
  if (noOfDigits == 0) {
    arr.push(output);
    return;
  }

  let op1 = output + "1";
  solve(ones + 1, zeros, noOfDigits - 1, op1, arr);

  if (ones > zeros) {
    let op2 = output + "0";
    solve(ones, zeros + 1, noOfDigits - 1, op2, arr);
  }

  return;
}

let main = (function (n) {
  let arr = [];

  solve(0, 0, n, "", arr);
  console.log(arr);
})(4);
