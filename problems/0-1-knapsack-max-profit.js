let storage = {};

function knapsack(valArr, wtArr, W, n) {
  if (n === 0 || W === 0) {
    return 0;
  }

  let keyName = String(W) + String(n);

  if (storage.hasOwnProperty(keyName)) {
    return storage[keyName];
  }

  if (wtArr[n - 1] <= W) {
    return (storage[keyName] = Math.max(
      valArr[n - 1] + knapsack(valArr, wtArr, W - wtArr[n - 1], n - 1),
      knapsack(valArr, wtArr, W, n - 1)
    ));
  } else if (wtArr[n - 1] > W) {
    return (storage[keyName] = knapsack(valArr, wtArr, W, n - 1));
  }
}

function knapsackTopdown(vArr, wArr, W, n) {
  //1. create a matrix
  const t = Array.from(Array(n + 1), () => new Array(W + 1));

  //2. Initialize matrix
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < W + 1; j++) {
      if (i == 0 || j == 0) {
        t[i][j] = 0;
      }
    }
  }

  //3. Fill the matrix
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < W + 1; j++) {
      if (wArr[i - 1] <= j) {
        t[i][j] = Math.max(
          vArr[i - 1] + t[i - 1][j - wArr[i - 1]],
          t[i - 1][j]
        );
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }
  return t[n][W];
}

let vArr = [1, 5, 6, 2, 7];
let wArr = [2, 5, 3, 4, 1];
let weight = 10;

console.log(knapsackTopdown(vArr, wArr, weight, vArr.length));
