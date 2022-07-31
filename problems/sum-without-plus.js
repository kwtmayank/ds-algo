var getSum = function(a, b) {
    // 1- get carry(left shifted by 1) using AND operator - a & b << 1
    // 2- get sum (no carry) with XOR operator - a ^ b
    // get actual sum by XORING above two
    // if step 1 & step 2 two gives futher carry, keep doing above process until carry is 0
    
      let temp;
      while((a & b) !== 0){
          temp = (a & b) << 1;
          a = a ^ b;
          b = temp;
      }
      return a ^ b;
};

console.log(getSum(1,3))