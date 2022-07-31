/**
 * @param {number[]} a
 * @param {number} n
 * @param {number[]} b
 * @param {number} m
 * @returns {number}
 */
function doUnion(a, n, b, m) {
  // code here

  let unionObj = {};
  let temp = [];
  for (let i = 0; i < n; i++) {
    if (!unionObj.hasOwnProperty(a[i])) {
      unionObj[a[i]] = true;
      temp.push(a[i]);
    }
  }

  for (let i = 0; i < m; i++) {
    if (!unionObj.hasOwnProperty(b[i])) {
      unionObj[b[i]] = true;
      temp.push(b[i]);
    }
  }

  return temp.length;
}

let a = [85, 25, 1, 54, 6];
let b = [85, 2, 2];
console.log(doUnion(a, a.length, b, b.length));
