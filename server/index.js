var express  = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

var serverOne = 'http://localhost:3001';
    // serverTwo = 'http://localhost:3002',
    // serverThree = 'http://localhost:3003';
 
app.all("/search/*", function(req, res) {
    // console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

app.listen(3000);