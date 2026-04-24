const myArray = ['test',10,true,{pne:'one',two:'two'}];
const myObj = {one:'one',two:'two'};
console.log(myArray);

console.log(myArray.length);
console.log(typeof myObj);
console.log(typeof myArray);

const myArr1 = myArray;

myArr1[0] = 'Tested Okay';

console.log(myArr1[0]);
console.log(myArr1[1]);
console.log(myArr1[2]);
console.log(myArr1[3]);

console.log(myArray[3]['two']);