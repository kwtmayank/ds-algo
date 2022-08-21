/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (arr) {
  let max_diff = arr[1] - arr[0];
  let min_element = arr[0];
  let arr_size = arr.length;
  for (let i = 1; i < arr_size; i++) {
    if (arr[i] - min_element > max_diff) max_diff = arr[i] - min_element;
    if (arr[i] < min_element) min_element = arr[i];
  }
  return max_diff > 0 ? max_diff : 0;
};

let prices = [7, 6, 4, 3, 1];
console.log("Profilt is " + maxProfit(prices));
