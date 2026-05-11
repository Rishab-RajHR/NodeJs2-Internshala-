const fs = require('fs');
const folderName = 'public2';
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
let val1 = fs.readdirSync(folderPath);
console.log(val1);