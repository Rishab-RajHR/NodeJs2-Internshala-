const fs = require('fs');
const http = require('http');
const dir = './public';
const mainFile = 'new1.html';
const url = `./${dir}/${mainFile}`;
console.log(url);

http.createServer((req, res)=>{
     fs.readFile(url,(err,html)=>{
        res.writeHead(200,{
           'Content-Type':'text/html'
        });
        console.log(html);
        res.write("Hello World");
        return res.end();
     })
     console.log('Server running');
}).listen(8080);

const rs = fs.createReadStream(url);
rs.on('open',(e)=>{
    console.log('File is open');
    let val = '<br>Opened';
    updateFile(val);
})

function udpateFile(val){
    fs.appendFile(url,val,(err)=>{
       if(err) throw err;
       console.log('Updated file');
    })
}

fs.stat(url,(err,stats)=>{
    console.log(stats.isFile());
})