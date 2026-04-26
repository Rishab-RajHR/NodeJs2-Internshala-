const myArr1 = ['one','two',55,true,{one:"one",two:"two"}]

// Convert to string
const val = myArr1.toString();

// Convert to JSON
val = JSON.stringify(myArr1);

console.log(val);