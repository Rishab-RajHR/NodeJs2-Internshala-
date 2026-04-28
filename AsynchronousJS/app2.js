// console.log(global);
let a = 'hello';
function timer(val){
    console.log(`timer ran ${val} ${a}`);
}

setTimeout(timer,2000,'Timer 1');
console.log('new val');

a = 'World';