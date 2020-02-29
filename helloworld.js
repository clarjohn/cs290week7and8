var http = require('http');

http.createServer(function(reg,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(7000);

console.log('Server started on localhost:7000; press ctrl-c to terminate.... ');