const myArr2 = ['one','two','three','two','three','two','three','two','three']

// Map method returns the new Array
const myArr3 = myArr2.map(val=>{
    return val;
})

// Another syntax for Map Method
// const myArr3 = myArr2.map(val=>val);

myArr2[2] = "HELLO";
console.log(myArr3);
console.log(myArr2);

// Adding the value
const myArr4 = myArr2.map(val => {
    val += ' TESTED';
    return val;
})
console.log(myArr4);