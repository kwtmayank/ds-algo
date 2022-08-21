function subsetSum(arr, n, sum) {
  //1. create a matrix
  const t = Array.from(Array(n + 1), () => new Array(sum + 1));

  //2. Initialize matrix
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (i === 0) {
        t[i][j] = false;
      }

      if (j === 0) {
        t[i][j] = true;
      }
    }
  }

  //3. Fill the matrix
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      if (arr[i - 1] <= j) {
        t[i][j] = t[i][j - arr[i - 1]] || t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  console.log(t);
  return t[n][sum];
}

let data = [2, 3, 8, 10];
let sum = 5;
let res = subsetSum(data, data.length, sum);
console.log(res);
