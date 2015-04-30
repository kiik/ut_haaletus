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
                db.Vote.find({where:{UserId:1}})
                    .then(function(data2){
                        res.json({
                            id: data.id,
                            first_name: data.first_name,
                            last_name: data.last_name,
                            email: "<placeholder>",
                            image: f.image.avatar(),
                            isVoteable: res.locals.user ? true : false,
                            isVoted: (data2 != null )? true : false,
                        });
                });
            });
    });

    router.get('/vote', function(req, res) {

        db.Application.find({where:{UserId: req.query.candidate_id}}).then(function(data) {
            db.Vote.create({ UserId: req.query.user_id, ApplicationId: data.id }).then(function() {
                        console.log('[DB] Row added to Vote');
                    });
        });

    });
}