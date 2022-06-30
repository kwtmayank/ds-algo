function permWtCase(ip, op) {
  if (ip.length == 0) {
    console.log(op);
    return;
  }

  let op1 = op;
  let op2 = op;

  op2 = op2 + ip.substr(0, 1);
  let ip1 = ip.substring(1);
  permWtCase(ip1, op1);
  permWtCase(ip1, op2);
  return;
}

permWtCase("abcd", "");
