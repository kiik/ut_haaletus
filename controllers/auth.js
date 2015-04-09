'use strict';


var url = require('url');
var passport = require('passport');

var requireAuth = require('../security').requireAuth;
var User = require('../models').User;


module.exports = function (router) {
    router.get('/login', requireAuth);

    router.get('/id', function (req, res, next) {
        //FIXME: Check what if auth failed
        res.redirect(req.query.ref);
    });

    router.get('/logout', function (req, res, next) {
        var URL = 'https://';
        URL += req.hostname;
        URL += ':8080';
        res.redirect(URL);
    });
}
