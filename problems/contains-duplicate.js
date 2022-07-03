/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (!nums || nums.length <= 1) {
    return false;
  }

  let result = false;

  let map = {};
  nums.forEach((item, index) => {
    if (map.hasOwnProperty(nums[index])) {
      result = true;
      return result;
    } else {
      map[item] = true;
    }
  });

  return result;
};

console.log(containsDuplicate([3, 3]));
