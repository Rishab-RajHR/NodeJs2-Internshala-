const myObj1 = {
     first : "Alex",
     last : "Pandian",
     age : 40,
     a1 : 'test',
     a2 : 'test2',
     a3 : 'test3',
     "test 1" : "wow"
};
console.log(myObj1);
console.clear();
console.log(myObj1.first + ' ' + myObj1.last); // dot notation

// bracket notation
console.log(myObj1['first'] + ' ' + myObj1['last']);

for(let x=1; x<4; x++){
    console.log('a'+x);
    console.log(myObj1['a'+x]);
}

console.log(myObj1['test 1']);