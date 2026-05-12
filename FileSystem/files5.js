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

function removeAll(){
    fs.readdir(dir, (err,files)=>{
        files.forEach((myFile)=>{
            console.log(myFile);
        })
    })
}

// delFile(dir + '/log.html');
function delFile(val){
   fs.unlink(val,(err)=>{
      if(err) throw err;
      console.log('File Deleted');
   })
}
// myLog('test2');


function overmyLog(val){ // overwriting file /create
    const html =` - ${val}`;
    fs.writeFile(dir + '/log.html',html,(err)=>{
        if(err) throw err;
        console.log(`Updated writeFile ${val}`);
    })
}

function myLog(val){  // adding /create
    const html = ` <br> * ${val}`;
    fs.appendFile(dir + '/log.html',html,(err)=>{
        if(err) throw err;
        console.log(`*Appended ${val}`);
    })
}

function createNewFile(myfileName){
    const html = `<h1>Hello ${tempCounter} </h1>`;
    fs.appendFile(dir + '/' + myfileName, html, (err)=>{
        if(err) throw err;
        console.log(`Save File ${myfileName}`)
    })
}