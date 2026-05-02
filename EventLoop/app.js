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

const test1 = () => {
    console.log('three');
    one();
    two();
}

test1();