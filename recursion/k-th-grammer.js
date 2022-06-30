/* To calcute nth grammer
  Rules if N=0, K=0 return 0;
  0 -> 0 1
  1 -> 1 0

  0                                --- N=1 
  0 1                              --- N=2
  0 1 1 0                          --- N=3
  0 1 1 0 1 0 0 1                  --- N=5
  0 1 1 0 1 0 0 1 1 0 0 1 0 1 1 0  --- N=6

 */
function exec(n, k) {
  if ((n == 1) & (k == 1)) return 0;

  let mid = Math.pow(2, n - 1) / 2;

  if (k <= mid) {
    return exec(n - 1, k);
  } else {
    return !exec(n - 1, k - mid);
  }
}

console.log(exec(6, 8));
