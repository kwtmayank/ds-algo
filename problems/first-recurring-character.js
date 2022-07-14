/*
GIven an Array [2,5,1,2,3,5,1,2,4]
output is 2

GIven an Array [2,1,1,3,2,5]
output is 1

GIven an Array [2,5,1,4]
output is undefined

*/

function findFirstChar(arr) {
  let charMap = {};

  for (let index = 0; index < arr.length; index++) {
    if (charMap.hasOwnProperty(arr[index])) {
      return arr[index];
    } else {
      charMap[arr[index]] = true;
    }
  }

  return undefined;
}

let nums = [2, 1, 1, 3, 2, 5];
console.log(findFirstChar(nums));
