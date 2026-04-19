// Function Expression is not hoisted

const fun1 = function(a,b,c){
    const val = a * b * c;
    return val;
} //expression

const val1 = fun1(5,6,7);
console.log(val1);