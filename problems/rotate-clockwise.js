function rotate(arr) {
  //code here
  for (let i = 0; i < arr.length; i++) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
  }
}

let arr = [9, 8, 7, 6, 4, 2, 1, 3];
rotate(arr);
console.log(arr);
