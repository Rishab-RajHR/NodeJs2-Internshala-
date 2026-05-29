const first = "Alex";
const last = "Pandian";

function output(message){
    return `${message} ${first} ${last}`;
}
// console.log(output("Hi"));
module.exports.output = output;