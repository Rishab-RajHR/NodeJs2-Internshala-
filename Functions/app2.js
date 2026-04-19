// Function Expression is not hoisted(Immediately invoked)

const fun1 = function(a,b,c){
    const val = a * b * c;
    return val;
} //expression

const val1 = fun1(5,6,7);
console.log(val1);


// IIFE(Immediately invoked)
const a = 5;
const b = 6;
const c = 7;

(function(a,b,c) {
    const val = a * b * c;
    console.log(val);
})(a,b,c);  // IIFE

// Function Expression
const fun3 = (function(a,b,c) {
    const val = a * b * c;
    return val;
})(a,b,c);  // IIFE
console.log(fun3);

// Function Declaration is hoisted
const val2 = fun2(8,2,4);

console.log(val2);

function fun2(a,b,c){
     const val = a * b * c;
     return val;
}
