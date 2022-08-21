/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //Solution 1
  let n = nums.length;
  k = k % n;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  //Solution 2
  /* let numsCopy = nums.slice();

  for (let i = 0; i < nums.length; i++) {
    console.log((i + k) % nums.length);
    nums[(i + k) % nums.length] = numsCopy[i];
  }
  */
};

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

let nums1 = [1, 2, 3, 4, 5];
//[3,99,-1,-100]
rotate(nums1, 4);
console.log(nums1);
