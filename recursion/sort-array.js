const methodName = "sort-array";

let result = 1;
function sort(arr) {
  if (arr.length == 1) {
    return arr;
  }

  let temp = arr[arr.length - 1];
  arr.pop();
  sort(arr);
  insert(arr, temp);
  return arr;
}

function insert(subArr, val) {
  if (subArr.length == 0 || subArr[subArr.length - 1] < val) {
    subArr.push(val);
    return subArr;
  }
  let temp = subArr[subArr.length - 1];
  subArr.pop();
  insert(subArr, val);
  subArr.push(temp);
  return subArr;
}

console.time(methodName);
console.info(sort([2, 4, 1, 0, 8, 6, 10, 3, 5, 1]));
console.timeEnd(methodName);
