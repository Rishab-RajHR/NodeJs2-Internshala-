const http = require('http');

// console.log(http);

http.createServer((req,res)=>{
     res.writeHead(200, {'Content-Type':'text/html'});
     if(req.url == '/'){
        res.write('Main landing page');
     }
     else if(req.url == '/test'){
        req.write('Test page');
     }
     else{
        res.write('Page not FOUND');
     }
     res.end();
}).listen(8080);

console.log('Server Running...');