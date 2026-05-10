const person = require('./test5');

const friend1 = new person('Alex', 'Pandian');
const friend2 = new person('Tovino', 'Thomas');
const friend3 = new person('Basil', 'Joseph');

console.log(friend1);
console.log(friend1.first);
console.log(friend1.last);
console.log(friend1.myName());
console.log(friend2.myName());
console.log(friend3.myName());