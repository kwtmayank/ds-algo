function reverse(str) {
  let arr = str.split('');

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr.join('');
}

console.log(reverse("Hi i am mayank"));
