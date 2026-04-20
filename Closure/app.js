function maker(val1){
    return function(val2){
        console.log(val1,val2);
        return val1 + val2;
    }
}
const fun1 = maker(5);

console.log(fun1(4));