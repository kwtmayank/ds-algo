function permWtCase(ip, op) {
  if (ip.length == 0) {
    console.log(op);
    return;
  }

  let op1 = op + ip[0];
  let op2 = op + " " + ip[0];
  let ip1 = ip.substring(1, ip.length);
  permWtCase(ip1, op1);
  permWtCase(ip1, op2);
  return;
}

let exce = (function () {
  let input = "ABC";

  permWtCase(input.substring(1), input.substring(0, 1));
})();
