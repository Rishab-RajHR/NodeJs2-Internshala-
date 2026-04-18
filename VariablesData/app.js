// Javascript list of instruction
// Variables is used to store the data type.

// var => can be redeclared
var newVariable = "hello";
console.log(newVariable);
newVariable = "world";
console.log(newVariable);


// let => cannot be redeclared
let newVariable1 = "hello";
console.log(newVariable1);
newVariable1 = "world";
console.log(newVariable1);
{
    let newVariable1 = "hello";
    console.log(newVariable1);
    newVariable1 = "world 2";
    console.log(newVariable1);
}
console.log(newVariable1);



// const=> Once applied cannot be changed later
const newVariable1 = "hello";
console.log(newVariable1);
newVariable1 = "world";
console.log(newVariable1);  // It will throw error
