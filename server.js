'use strict';

var http = require('http');
var https = require('https');

var app = require('./index');
var tls_setup = require('./tls_setup');

var server, tls_server;

var fs = require('fs');

var opts = {
    key : fs.readFileSync('certs/server.key'),
    cert : fs.readFileSync('certs/server.crt'),
    ca : fs.readFileSync('certs/ca.crt'),
    passphrase : "password",
    requestCert : false,
    rejectUnauthorized: false,
}

/*
 * Create and start HTTP server.
 */
server = https.createServer(opts, app);
server.listen(process.env.PORT || 8080);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});

opts.requestCert = true;

tls_server = https.createServer(opts, app);
tls_server.listen(process.env.PORT || 8022);
tls_server.on('listening', function () {
    console.log('TLS Server listening on https://localhost:%d', this.address().port);
});
