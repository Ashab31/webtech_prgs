var http = require('http');
var module1 = require('./module1');

function onRequest(request, response) {

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(module1.mystring);
    response.myfunction();
    response.end();
}

http.createServer(onRequest).listen(8000);