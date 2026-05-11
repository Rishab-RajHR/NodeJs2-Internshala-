const fs = require('fs');
const folderName = 'public';

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