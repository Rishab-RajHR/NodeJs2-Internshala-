// Recursive function in the event loop

// JS Single Thread
function test1(){
   return test1();  // recursive function
}

var test4 = function test5(i){
    console.log(i);
    if(i<5){
       test5(i+1);
    }
}

test4(0);

console.log('one');
// test1();
console.log('two');

// Event Loop checks call stack -
// console.clear();
const one = ()=> console.log('one');
const two = ()=> console.log('two');

const test2 = () => {
    console.log('three'); // 2
    one(); // 3
    two(); // 5
}

const test3 = () => {
   console.log('three'); // 2
   setTimeout(one,0); // 3 starts timer
   two(); // 4
}

test3(); // 1

// Event loop give priority to call stack - only once the stack is completed and nothing is there then it checks the queue.

console.clear();

// IIFE Function

(() => {
    console.log('Run right away');
})();

setTimeout(()=>{
    console.log('I can run after 1 second');
},0);