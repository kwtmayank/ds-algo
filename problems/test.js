function processData(input) {
    //Enter your code here
    let data = input.split("\n");
    let first = [];
    let second = [];

    for(let i=1; i<data.length; i++){
        let operation = data[i].split(" ");
        if(operation[0] === '1'){
            //console.log("enqueue "+operation[1]);
            for (let j = 0; j < first.length; j++) {
                second.push(first.pop());
            }
            second.push(operation[1]);
            console.log(second);
            console.log(first);
        }else if(operation[0] === '2'){
            //console.log("dequeue ");
            
            for (let j = 0; j < second.length; j++) {
                let temp = second.pop();
                first.push(temp);
            }
           // console.log(first[first.length - 1]);
            console.log(second);
            console.log(first);
            first.pop();
            
        }else if(operation[0] === '3'){
            //console.log("print the queue ");
            if (second.length > 0) {
               // console.log(second[0]);
            }else{
                //console.log(first[first.length - 1]);
            }
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
