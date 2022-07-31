function moveNegatives(arr) {
  let lastPositiveIndex = 0;
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      temp.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      temp.push(arr[i]);
    }
  }

  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
}

let arr = [1, -1, 3, 2, -7, -5, 11, 6];
moveNegatives(arr);
console.log(arr);
