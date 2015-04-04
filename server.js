'use strict';

var http = require('http');
var https = require('https');

var app = require('./index');
var tls_app = require('./tls_index');

var server, tls_server;

var fs = require('fs');

var opts = {
    key : fs.readFileSync('certs/server.key'),
    cert : fs.readFileSync('certs/server.crt'),
    ca : fs.readFileSync('certs/ca.crt'),
    passphrase : "password",
    requestCert : true,
    rejectUnauthorized: false,
}

/*
 * Create and start HTTP server.
 */
server = http.createServer(app);
server.listen(process.env.PORT || 8080);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});

tls_server = http.createServer(app);
tls_server.listen(process.env.PORT || 8022);
tls_server.on('listening', function () {
    console.log('TLS Server listening on https://localhost:%d', this.address().port);
});
