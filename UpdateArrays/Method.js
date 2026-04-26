const myArr1 = ['one','two',55,true,{one:"one",two:"two"}]

// Convert to string
let val = myArr1.toString();

// Convert to JSON
val = JSON.stringify(myArr1);

// Convert to Object 
val = JSON.parse(val);

val[0] = "UPDATED";

console.log(val);   // Updated Ones
console.log(myArr1); // No Update 


// String Array
const myArr2 = ['one','two','three'];
val = myArr2.join();

console.log(val);