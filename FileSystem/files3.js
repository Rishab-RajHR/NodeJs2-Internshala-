const fs = require('fs');
const dir = './public';
let tempCounter = 1;
let newFileName = `new${tempCounter}.html`;
console.clear();

fs.readdir(dir, (err,files)=>{
    console.log(files);
    console.log(files.length);
    console.log(err);
    tempCounter = files.length + 1;
    newFileName = `new${tempCounter}.html`;
    createNewFile(newFileName);
})

function createNewFile(myfileName){
    const html = `<h1>Hello ${tempCounter} </h1>`;
    fs.appendFile(dir + '/' + myfileName, html, (err)=>{
        if(err) throw err;
        console.log(`Save File ${fileName}`)
    })
}