const fs = require('fs');
const dir = './public';
let tempCounter = 1;
let newFileName = `new${tempCounter}.html`;
console.clear();

function renameFiler(fileName,newName){
    fs.rename(fileName,newName,(err)=>{
        if(err) throw err;
        console.log(`File Renamed - ${newName} from ${fileName}`);
    })
}

renameAll()
function renameAll(){
    fs.readdir(dir, (err,files)=>{
        files.forEach((myFile,ind)=>{
            renameFiler(dir+'/'+myFile, `${dir}/new${ind+1}.html`);
        })
    })
}

// maker();
function maker(){
for(let i=0; i<5; i++){
fs.readdir(dir, (err,files6)=>{
    console.log(files6);
    console.log(files6.length);
    console.log(err);
    tempCounter = files6.length + i +  1;
    newFileName = `new${tempCounter}.html`;
    createNewFile(newFileName);
})
}
}

removeAll()
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
      console.log(`File Deleted ${val}`);
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