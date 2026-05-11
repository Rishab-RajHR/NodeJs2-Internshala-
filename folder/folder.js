const fs = require('fs');
const folderName = 'public';

fs.mkdirSync(folderName);
console.log(fs.existsSync(folderName));