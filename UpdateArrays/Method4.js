const myArr2 = ['one','two','three','two','three','two','three','two','three']

// Map method returns the new Array
const myArr3 = myArr2.map(val=>{
    return val;
})
myArr2[2] = "HELLO";
console.log(myArr3);
console.log(myArr2);