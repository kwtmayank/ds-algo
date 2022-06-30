function permWtCase(ip, op) {
  if (ip.length == 0) {
    console.log(op);
    return;
  }

  let op1 = op;
  let op2 = op;

  op2 = op2 + ip[0];
  let ip1 = ip.splice(1, ip.length);
  permWtCase(ip1, op1);
  permWtCase(ip1, op2);
  return;
}

permWtCase(["a", "b", "c"], "");
