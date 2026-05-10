const http = require('http');

// console.log(http);

http.createServer((req,res)=>{
     res.writeHead(200, {'Content-Type':'text/html'});
     res.write('Hello');
     res.write('World');
     res.end();
}).listen(8080);

console.log('Server Running...');