//Create Web Server
const http = require('http');
http.createServer(function (req, res) {
  homeRoute(req, res);
}).listen(8080);
console.log('server listening on port: 8080');

function homeRoute(req, res) {
  if (req.url === "/") {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("header\n");
    res.write("Search\n");
    res.end('footer\n');
    }
  }
