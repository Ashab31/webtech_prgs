// var http = require('http');
// var module1 = require('./module1');

// function onRequest(request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.write(module1.mystring);
//     module1.myfunc();
//     response.end();
// }
// http.createServer(onRequest).listen(8000);

var http = require('http');
var module2 = require('./module2');

function onRequest(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(module2.myVar);

    module2.myfunc();
    response.end();
}

http.createServer(onRequest).listen(8080);