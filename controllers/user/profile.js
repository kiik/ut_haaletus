'use strict';

var requireAuth = require('../../tls_setup').requireAuth;

var User = require('../../models').User;

module.exports = function (router) {

    router.get('/', requireAuth(true), function (req, res, next) {
        User.find({ where: { ssn: 39403062715 } }).then(
            function(user) {
                if(user == undefined) {
                    next(new Error('User not found.'));
                    return;
                }

                var model = {
                    ssn: user.ssn,
                    fname: user.first_name,
                    lname: user.last_name
                }
                res.render('user/profile', model);
            });
    });
};
