const fs = require('fs');
const fileName = 'test.txt';
const data = fs.readFileSync(fileName,'utf8');
console.log(data);