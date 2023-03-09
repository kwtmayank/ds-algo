function findMajorityElement(arr, n) {
  let majority = n / 2;
  let store = new Map();

  for (let i = 0; i < n; i++) {
    if (store.has(arr[i])) {
      store.set(arr[i], store.get(arr[i]) + 1);
    } else {
      store.set(arr[i], 1);
    }
  }

  let keys = store.keys();
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
    if (keys[i] > majority) {
      return keys[i];
    }
  }
}

let num = [2, 2, 1, 1, 2];
console.log(findMajorityElement(num, num.length));
