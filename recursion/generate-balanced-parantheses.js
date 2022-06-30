function solve(open, close, output, arr) {
  if (open == 0 && close == 0) {
    arr.push(output);
    return;
  }

  if (open != 0) {
    let op1 = output + "(";
    solve(open - 1, close, op1, arr);
  }

  if (close > open) {
    let op2 = output + ")";
    solve(open, close - 1, op2, arr);
  }

  return;
}

let main = (function (n) {
  let arr = [];
  solve(n, n, "", arr);
  console.log(arr);
})(4);
