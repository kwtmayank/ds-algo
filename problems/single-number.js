/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hashTable = {};
  for (let index = 0; index < nums.length; index++) {
    if (hashTable.hasOwnProperty(nums[index]) && hashTable[nums[index]] === 1) {
      delete hashTable[nums[index]];
    } else {
      hashTable[nums[index]] = 1;
    }
  }
  return Object.keys(hashTable)[0];
};

const ip = [2,2,1];
console.log(singleNumber(ip));
