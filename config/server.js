// src/server.js
const express    = require('express');
const config     = require('./config');
//const router     = require('./routes');
const bodyParser = require('body-parser');
const path       = require('path');

const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/node_modules',express.static(path.join(__dirname, '../node_modules')));
app.use(router);

app.listen(config.port, function() {
  console.log("I AM LISTENING ON PORT " + config.port + "!!!");
});


//create web server

// const http = require('http');
// http.createServer(function (req, res) {
//   homeRoute(req, res);
// }).listen(8080);
// console.log('server listening on port: 8080');

//HTTP route GET/ and POST/ ie Home
// function homeRoute(req, res) {
//   if (req.url === "/") {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write("header\n");
//     res.write("Search\n");
//     res.end('footer\n');
//     }
//   }
