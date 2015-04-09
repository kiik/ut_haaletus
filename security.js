'use strict';

var express = require('express');
var url = require('url');
var clientCertificateAuth = require('./client-certificate-auth');

var User = require('./models').User;


function checkAuth(res, cert, callback) {
    res.locals.user = {
        username: cert.subject.CN
    };
    return callback(true);
}


module.exports = {
    requireAuth: function(req, res, next) {
        if(res.locals.user != undefined) {
            if(req.query.ref)
                res.redirect(req.query.ref);
            else
                res.redirect("/");
            return;
        }

        console.log(req.originalUrl);
        var path = url.parse(req.header("Referer")).pathname;
        var URL = 'https://';
        URL += req.hostname;
        URL += ':8022'+path;
        console.log("URL="+URL);
        res.redirect(URL);
    },
    certAuth: clientCertificateAuth(checkAuth)
}
