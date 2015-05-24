'use strict';

var db = require('../models');

module.exports = function (router) {

    router.get('/data', function (req, res) {
        db.User.find({ where: { ssn: res.locals.user.ssn }}).then(function(user) {
            db.Vote.find({where: {UserId : user.id}}).then(function(data) {
                res.json({
                    first: user.first_name,
                    last: user.last_name,
                    hasVoted: data? true : false,
                    isCandidate: user.OrganizationId? true : false,
                });
            });
        });
    });
};