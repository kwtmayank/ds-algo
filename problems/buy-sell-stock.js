function findMaxProfit(arr){
    let min_element = arr[0];
    let max_profit = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]-min_element > max_profit){
            max_profit = arr[i]-min_element
        }else{
            min_element = arr[i];
        }
    }

    return max_profit;
}

let num = [7,1,2,5,6];
console.log(findMaxProfit(num));