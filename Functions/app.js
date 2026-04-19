function myFun1(){
    console.log("Hello");
    console.log("Alex");
};

function myFun2(message,name,val) {
    console.log(message,name,val);
    const val1 = name + ' ' + message;
    console.log(val1);
};

myFun1();
myFun2('Hello','Tovino',100);