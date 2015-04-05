'use strict';


var url = require('url');
var passport = require('passport');

var User = require('../models').User;


module.exports = function (router) {
    router.get('/login', function(req, res) {
        var query;
        if(req.query.ref) {
            var i = req.url.indexOf('?');
            query = req.url.substr(i);
        } else {
            query = "?ref="+url.parse(req.header("Referer")).pathname;
        }

        res.redirect("https://localhost:8022/auth/"+req.query.type+query);
    });

    router.get('/id', passport.authenticate('client-cert'), function (req, res, next) {
        res.redirect(req.query.ref);
    });

    router.get('/logout', function (req, res, next) {
        req.logout();
        res.redirect('https://localhost:8080');
    });
}
