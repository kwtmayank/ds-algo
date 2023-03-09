let n = 6;
let arr = [[1]];
for (let i = 1; i < n; i++) {
  let prevArr = arr[i - 1];
  let tempArr = [];
  for (let j = 0; j < i + 1; j++) {
    let a = prevArr[j - 1] ? prevArr[j - 1] : 0;
    let b = prevArr[j] ? prevArr[j] : 0;
    tempArr.push(a + b);
  }
  arr.push(tempArr);
}

console.log(arr);
