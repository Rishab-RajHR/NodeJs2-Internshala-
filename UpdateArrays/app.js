const myArray = ['test',10,true,{one:'one',two:'two'}];

const myArr1 = myArray;

myArr1[0] = 'Tested Okay';

console.log(myArray);
console.log(myArr1[0]);
console.log(myArr1[1]);
console.log(myArr1[2]);
console.log(myArr1[3]);
console.log(myArray[3]['two']);
console.clear();
for(let x=0; x<5; x++){
    // myArr1[myArray.length] = 'Counter ' + x;
    const temp = 'Counter ' + x;
    myArr1.push(temp); // add to end
}

for(let x=0; x<3; x++)
{ 
   const temp =  myArr1.pop(); // remove from end with response.
   console.log('REMOVED'+temp);
}

for(let x=0; x<3; x++)
{ 
   const temp =  myArr1.shift(); // remove from start with response.
   console.log('REMOVED from start '+temp);
}


