// JS Single Thread
function test1(){
   return test1();
}
console.log('one');
// test1();
console.log('two');

// Event Loop checks call stack -
console.clear();
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