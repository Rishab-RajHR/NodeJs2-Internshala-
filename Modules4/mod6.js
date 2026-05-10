const http = require('http');

// console.log(http);

const myJson = require('./json1');

http.createServer((req,res)=>{
     res.writeHead(200, {'Content-Type':'application/json'});
     res.write(JSON.stringify(myJson));
     res.end();
}).listen(8080);

console.log('Server Running...');