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
   setTimeout(one,0);
   two(); // 5
}

test2();