// JS Single Thread
function test1(){
   return test1();
}
console.log('one');
// test1();
console.log('two');

// Event loop checks the call stack -

console.clear();
const one = ()=> console.log('one'); // 4
const two = ()=> console.log('two'); // 6

const test2 = () => {
     console.log('Three'); // 2
     one(); // 3
     two(); // 5
}

test2(); // 1
