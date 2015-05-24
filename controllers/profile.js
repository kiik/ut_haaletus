'use strict';

var db = require('../models');

module.exports = function (router) {

    router.get('/data', function (req, res) {
        db.User.find({ where: { ssn: res.locals.user.ssn }}).then(function(user) {
            db.Vote.find({where: {UserId : user.id}}).then(function(data) {
                if(data) {
                    db.Application.find({where:{id: data.ApplicationId}}).then(function(candidate) {
                        res.json({
                            first: user.first_name,
                            last: user.last_name,
                            id: candidate.UserId,
                            hasVoted: true,
                            isCandidate: user.OrganizationId? true : false,
                        });
                    });
                } else {
                    res.json({
                        first: user.first_name,
                        last: user.last_name,
                        id: "none",
                        hasVoted: false,
                        isCandidate: user.OrganizationId? true : false,
                    });
                }
            });
        });
    });
};