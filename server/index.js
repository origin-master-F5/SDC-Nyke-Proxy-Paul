var express  = require('express');
let morgan = require('morgan');
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
const path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use(morgan('dev'));

var serverOne = 'http://localhost:3001';
    // serverTwo = 'http://localhost:3002',
    // serverThree = 'http://localhost:3003';
 
app.all("/search/*", function(req, res) {
    // console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

app.listen(3000);