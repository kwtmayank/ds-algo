/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sumArr = [];
  let sum = 0;
  
  nums.forEach(value => {
      sum = sum + value;
      sumArr.push(sum);
  });
  
  return sumArr;
  
};

console.log(runningSum([1, 2, 3, 4]));
