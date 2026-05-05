const rLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rLine.question(`What is your name?`, name => {
    console.log(name);
    console.log(`Welcome ${name}`);
    rLine.close();
})