function sort012(arr, N) {
  //your code here
  let map = { 0: 0, 1: 0, 2: 0 };
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]]+1;
  }

  for (let i = 0; i < arr.length; i++) {
    if(map[0] > 0){
        arr[i] = 0;
        map[0] = map[0]-1
    }else if(map[1] > 0){
        arr[i] = 1;
        map[1] = map[1]-1
    }else if (map[2] > 0){
        arr[i] = 2;
        map[2] = map[2]-1
    }
  }
}

let ip = [0, 2, 1, 2, 0];
sort012(ip);
console.log(ip);
