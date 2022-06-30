/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  return nums.reduce(
    (acc, curr, index) => {
      if (index > 0) {
        let sum = acc[acc.length - 1];
        acc.push(sum + curr);
      }
      return acc;
    },
    [nums[0]]
  );
};

console.log(runningSum([1, 2, 3, 4]));
