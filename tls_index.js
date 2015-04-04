'use strict';

var express = require('express');
var clientCertificateAuth = require('client-certificate-auth');


var checkAuth = function(cert, callback) {
    console.log("ID-AUTH");
    console.log(cert);
    callback(true);
};


var app = module.exports = express();
app.use(clientCertificateAuth(checkAuth));


app.get("/id-auth",
    function(req, res) {
        console.log("/id-auth");

        if(req.client.authorized){

            var subject = req.connection
                .getPeerCertificate().subject;

            res.send({ title:        'Authorized!',
                        user:         subject.CN,
                        email:        subject.emailAddress,
                        organization: subject.O,
                        unit:         subject.OU,
                        location:     subject.L,
                        state:        subject.ST,
                        country:      subject.C
                    });

        } else {
            var socket = req.connection;
            console.log(req.connection);
            var optClientAuth = {
                    requestCert: true,
                    rejectUnauthorized: true,
                };
            res.send("renegotiate");
            /*
            socket.renegotiate(optClientAuth, function(err){
                if (!err) {
                    console.log(req.connection.getPeerCertificate());
                } else {
                    console.log(err.message);
                }
            });
            */
        }
    });
