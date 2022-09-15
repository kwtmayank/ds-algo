function maxSubArraySum(arr, size) {
  let max_so_far = Number.MIN_SAFE_INTEGER;
  let max_ending_here = 0;

  for (let i = 0; i < size; i++) {
    max_ending_here = max_ending_here + arr[i];
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;

    if (max_ending_here < 0) max_ending_here = 0;
  }
  return max_so_far;
}

let a = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSubArraySum(a, a.length));
