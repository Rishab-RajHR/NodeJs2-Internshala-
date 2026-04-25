const myArray = ['test',10,true,{one:'one',two:'two'}];

const myArr1 = myArray;

myArr1[0] = 'Tested Okay';

for(let x=0; x<5; x++){
    myArr1[myArray.length] = 'Counter ' + x;
}
console.clear();
console.log(myArray)

console.log(myArr1[0]);
console.log(myArr1[1]);
console.log(myArr1[2]);
console.log(myArr1[3]);

console.log(myArray[3]['two']);