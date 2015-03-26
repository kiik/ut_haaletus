'use strict';

var app = require('./index');
var http = require('http');
var https = require('https');
var server;

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

server = https.createServer(opts, app);
server.listen(process.env.PORT || 8000);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});
