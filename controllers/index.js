'use strict';




module.exports = function (router) {

    router.get('/', function (req, res) {
        res.render('index', model);
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
