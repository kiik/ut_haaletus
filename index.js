'use strict';

var express = require('express');
var clientCertificateAuth = require('client-certificate-auth');
var kraken = require('kraken-js');

var options, app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */
        next(null, config);
    }
};


var checkAuth = function(cert, callback) {
    console.log("ID-AUTH");
    console.log(cert);
    callback(true);
};


app = module.exports = express();
//app.use(clientCertificateAuth(checkAuth));
app.use(kraken(options));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});

app.get("/id-auth",clientCertificateAuth(checkAuth),
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
            res.send('unauthorized');
        }
    });
