function killAPerson(arr, number, currentPosition) {
  if (arr.length == 1) {
    return arr[0];
  }

  let toDie = (currentPosition + number) % arr.length;
  arr.splice(toDie, 1);
  return killAPerson(arr, number, toDie);
}

let exec = (function (n, k) {
  let persons = [];
  for (let i = 1; i <= n; i++) {
    persons.push(i);
  }
  k = k - 1;
  console.log(killAPerson(persons, k, 0));
})(5, 2);
