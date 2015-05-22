'use strict';

var http = require('http');
var https = require('https');
var fs = require('fs');
var security = require('./security');

var app = require('./index');
app.use(security.certAuth);

var opts = {
    key : fs.readFileSync('certs/ca.key'),
    cert : fs.readFileSync('certs/ca.crt'),
    ca : fs.readFileSync('certs/ca.crt'),
    passphrase : "password",
    requestCert : false,
    rejectUnauthorized: false,
}

var server, tls_server;

server = https.createServer(opts, app);
server.listen(process.env.PORT || 8080);
server.on('listening', function () {
    console.log('Server listening on https://localhost:%d', this.address().port);
});


opts.requestCert = true;
opts.rejectUnauthorized = true;

tls_server = https.createServer(opts, app);
tls_server.listen(process.env.PORT || 8022);
tls_server.on('listening', function () {
    console.log('TLS Server listening on https://localhost:%d', this.address().port);
});
