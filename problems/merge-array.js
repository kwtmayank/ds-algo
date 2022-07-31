function merge() {
  let finalArray = [];
  let map = {};
  for (let i = 0; i < arguments.length; i++) {
    finalArray = finalArray.concat(arguments[i]);
  }

  for (let j = 0; j < finalArray.length; j++) {
    if (map.hasOwnProperty(finalArray[j])) {
      finalArray.splice(j, 1);
    } else {
      map[finalArray[j]] = true;
    }
  }
  console.log(finalArray);

  return finalArray;
}
let a = ["alpha", "charlie", "delta"];
let b = ["bravo", "delta"];
let c = [];
let d = [];

merge(a, b, c, d);
