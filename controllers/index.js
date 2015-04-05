'use strict';


var passport = require('passport');
var requireAuth = require('../tls_setup').requireAuth;


module.exports = function (router) {

    router.get('/', function (req, res, next) {
        passport.authenticate('client-cert', function(err, user, info) {
            var data = {
                user: user
            };
            console.log("User:");
            console.log(user);
            return res.render('index', data);
        })(req, res, next);
    });

    router.get('/layout', function (req, res) {
        res.render('layouts/master');
    });

    router.get('/kandidaadid', function (req, res) {
        res.render('kandidaadid');
    });

    router.get('/tulemused', function (req, res) {
        res.render('tulemused');
    });

    router.get('/tulemused/riigis', function (req, res) {
        res.render('riigis');
    });

    router.get('/tulemused/piirkondades', function (req, res) {
        res.render('piirkondades');
    });

    router.get('/tulemused/parteides', function (req, res) {
        res.render('parteides');
    });

    router.get('/tulemused/kandidaadid', function (req, res) {
        res.render('t_kandidaadid');
    });
};
