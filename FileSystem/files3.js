const fs = require('fs');
const dir = './public';
let tempCounter = 1;
let newFileName = `new${tempCounter}.html`;
console.clear();

function maker(){
for(let i=0; i<5; i++){
fs.readdir(dir, (err,files3)=>{
    console.log(files3);
    console.log(files3.length);
    console.log(err);
    tempCounter = files3.length + i +  1;
    newFileName = `new${tempCounter}.html`;
    createNewFile(newFileName);
})
}
}

function createNewFile(myfileName){
    const html = `<h1>Hello ${tempCounter} </h1>`;
    fs.appendFile(dir + '/' + myfileName, html, (err)=>{
        if(err) throw err;
        console.log(`Save File ${myfileName}`)
    })
}