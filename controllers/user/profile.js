'use strict';

var requireAuth = require('../../security').requireAuth;

var User = require('../../models').User;

module.exports = function (router) {

    router.get('/', function (req, res, next) {
        User.find({ where: { ssn: 39403062715 } }).then(
            function(user) {
                if(user == undefined) {
                    next(new Error('User not found.'));
                    return;
                }
                res.render('user/profile');
            });
    });
};
