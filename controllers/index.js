'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();


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
};
