function countOfSubsetSum(arr, n, sum) {
  //1. create a matrix
  const t = Array.from(Array(n + 1), () => new Array(sum + 1));

  //2. Initialize matrix
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (i === 0) {
        t[i][j] = 0;
      }

      if (j === 0) {
        t[i][j] = 1;
      }
    }
  }

  //3. Fill the matrix
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j] + t[i][j - arr[i - 1]];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  console.log(t);
  return t[n][sum];
}

let data = [2, 3, 5, 6, 2, 10];
let sum = 10;
let res = countOfSubsetSum(data, data.length, sum);
console.log(res);
