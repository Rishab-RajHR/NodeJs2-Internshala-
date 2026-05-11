const fs = require('fs');
const dir = './public';
console.clear();

fs.readdir(dir, (err,files)=>{
    console.log(files);
    console.log(err);
})