const myArr1 = ['one','two',55,true,{one:"one",two:"two"}]

// Convert to string
let val = myArr1.toString();

// Convert to JSON
val = JSON.stringify(myArr1);

// Convert to Object 
val = JSON.parse(val);

val[0] = "UPDATED";

console.log(val);
console.log(myArr1);