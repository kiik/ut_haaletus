'use strict';


var f = require("faker");
var db = require("../models");

module.exports = function(router) {
    router.get('/list', function(req, res) {
        db.User.findAll({
            limit: req.query.count,
            offset: req.query.page * req.query.count,
            include: [
                {
                    model: db.Application,
                    required: true
                },
                {
                    model: db.Organization,
                    required: true
                },
            ]
        }).then(function(users) {
            var data = [];
            var o;

            for(var i=0; i < users.length; i++) {
                o = users[i];

                data.push( { name: o.name, id: o.id, org: o.Organization.name } );
            }

            res.json({ candidates: data, page_count: 30 });
        });
    });

    router.get('/details', function(req, res) {
        db.User.find({where:{id:req.query.id}})
            .then(function(data) {
                db.User.find({where: {ssn: res.locals.user.ssn}}).then(function(data2) {
                    db.Application.find({where:{UserId: data.id}}).then(function(data3) {
                        db.Vote.find({where: {UserId: data2.id}}).then(function(data4){
                            res.json({
                                id: data.id,
                                first_name: data.first_name,
                                last_name: data.last_name,
                                email: "<placeholder>",
                                image: f.image.avatar(),
                                isVoteable: res.locals.user ? true : false,
                                isVoted: (data4 != null )? true : false,
                                isThisCandidate: (data4 != null)? (data4.ApplicationId == data3.id) : false,
                            });
                        });
                    });
                });
            });
    });

    router.get('/vote', function(req, res) {
        db.Application.find({where:{UserId: req.query.candidate_id}}).then(function(data) {
            db.User.find({where: {ssn: res.locals.user.ssn}}).then(function(data2) {
                db.Vote.create({ UserId: data2.id, ApplicationId: data.id }).then(function() {
                            console.log('[DB] Row added to Vote');
                        });
            });
        });

    });

    router.get('/delete', function(req,res) {
        db.User.find({where: {ssn: res.locals.user.ssn}}).then(function(data) {
            db.Vote.destroy({where:{UserId:data.id}}).then(function() {
                console.log('[DB] Row deleted from Vote')
            });
        });
    });
}