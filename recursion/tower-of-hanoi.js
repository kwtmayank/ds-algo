import Stack from "../ds/stack/stack.js";

function movePlates(n, source, destination, helper) {
  if (n == 1) {
    printMessage(n, source, destination);
    return;
  }

  movePlates(n - 1, source, helper, destination);
  printMessage(n, source, destination);
  movePlates(n - 1, helper, destination, source);
  return;
}

function printMessage(n, s, d) {
  console.info(`moving plate ${n} from rod ${s} to rod ${d}`);
}

let exec = (function () {
  movePlates(5, 1, 3, 2);
})();
