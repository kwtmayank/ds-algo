/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let output = [];
  let comp = {};

  nums.forEach((item, index) => {
    let diff = target - item;
    if (comp.hasOwnProperty(diff)) {
      output.push(comp[diff]);
      output.push(index);
    } else {
      comp[item] = index;
    }
  });

  return output;
};

console.log(twoSum([3, 2, 4, 4], 5));
