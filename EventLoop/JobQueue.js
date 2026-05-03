// JS Single Thread
function test1(){
   return test1();
}
console.log('one');
// test1();
console.log('two');

// Event loop checks the call stack -

console.clear();
const one = ()=> console.log('one');
const two = ()=> console.log('two');

const test2 = () => {
     console.log('Three');
     one();
     two();
}

test2();
