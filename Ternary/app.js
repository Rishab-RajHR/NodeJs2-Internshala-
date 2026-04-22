
/*function checkOutput(val){
    let message;
    let checkNum = 10;
    if(val > checkNum){
        message = val + ' was larger than ' + checkNum;
    }else if(val == checkNum){
        message = val + ' Both are equal to ' + val;
    }else{
        message = val + ' was less than ' + checkNum;
    }
    return message
}

let counter = 3;
let temp = (counter > 10) ? 'True' : 'False not greater';
console.log(temp);
console.log(checkOutput(counter));
counter++;
counter+=8;
console.log(checkOutput(counter));
counter-=2;
console.log(checkOutput(counter));*/


const age = 22;
let message;

// Using ternary operator
let message1 = (age >= 21) ? 'Allow in' : 'Not allowed';
console.log(message1);

// Using if-else
if(age >= 21) {
    message = 'Allow in';
}else{
   message = 'Not allowed';
}
console.log(message);