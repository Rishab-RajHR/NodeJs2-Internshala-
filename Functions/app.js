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

// myFun1();
myFun2('Hello','Tovino',100);
myFun2('Hii','Basil',500);

const val1 = myFun2('Welcome','Jane',1000);
console.log(val1);