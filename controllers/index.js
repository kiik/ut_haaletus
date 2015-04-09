'use strict';


module.exports = function (router) {

    router.get('/', function(req, res, next) {
        res.render('layouts/master');
    });

    router.get('/index', function(req, res) {
        res.render('index');
    });

    router.get('/teave', function(req, res) {
        res.render('info');
    });
};
