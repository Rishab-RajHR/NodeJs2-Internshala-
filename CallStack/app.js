// JS Single Thread
function test1(){
   return test1();
}

var test4 = function test5(i){
   console.log(i);
}

test4();

console.log('one');
// test1();
console.log('two');

// Event loop checks the call stack -

// console.clear();
const one = ()=> console.log('one'); // 4
const two = ()=> console.log('two'); // 6

const test2 = () => {
     console.log('Three'); // 2
     one(); // 3
     two(); // 5
}

const test3 = () => {
    console.log('three'); // 2
    setTimeout(one, 0); // 3 starts timer
    two();  // 5
}

test3(); // 1

// Event Loop give priority to call stack - only once the stack then it goes to the Queue.
