const fs = require('fs');
const folderName = 'public3';
console.error();
try {
    if(!fs.existsSync(folderName)){
        fs.mkdirSync(folderName);
        console.log('folder Made');
    }else {
       console.log('Folder exists');
    }
} catch (err) {
   console.log(err);
}

const folderPath = `./${folderName}`;

fs.writeFile(folderPath+'/index2.html','<h1>Hello World</h1>', (err) => {
    if(err) throw err;
    console.log('file created');
})


let val1 = fs.readdirSync(folderPath);
console.log(val1);