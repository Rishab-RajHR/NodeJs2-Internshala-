/* const num1 = 88;
const rem = num1 % 2;
console.log(rem);

// 1 => true and 2 => false

if(rem){
    console.log(num1 + ' : was odd');
}else{
    console.log(num1 + ' : was even');
}

if(rem){
   console.log('was true');
}else{
   console.log('was false');
} */


function checkOutput(val){
    let message;
    let checkNum = 10;
    if(val > checkNum){
        message = val + ' was larger than ' + checkNum;
    }else{
        message = val + ' was less than ' + checkNum;
    }
    return message
}

let counter = 3;
console.log(checkOutput(counter));
counter++;
counter+=8;
console.log(checkOutput(counter));
counter-=2;
console.log(checkOutput(counter));