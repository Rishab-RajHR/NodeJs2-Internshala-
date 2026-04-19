const  myFunc4 = function(a,b,c){
    const val1 = a * b - c;
    return val1;
}

const a4 = myFunc4(4,6,2);
const a5 = myFunc4(40,60,2);
const a6 = myFunc4(50,2,25);
console.log(a4,a5,a6);

function myFun1(){
    console.log("Hello");
    console.log("Alex");
};

function myFun2(message,name,val) {
    console.log('1.'+message,name,val);
    const val1 = name + ' ' + message;
    console.log('2.'+val1);
    return val1;
};

function myFunc3(a,b,c){
    const val1 = a * b / c;
    console.log('===='+val1);
    return val1;
}

myFun1();
myFun2('Hello','Tovino',100);
myFun2('Hii','Basil',500);

const val1 = myFun2('Welcome','Jane',1000);
console.log(val1);

const a1 = myFunc3(4,6,2);
const a2 = myFunc3(40,60,2);
const a3 = myFunc3(50,2,25);
console.log(a1,a2,a3);