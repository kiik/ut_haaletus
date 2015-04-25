'use strict';


var f = require("faker");
var db = require("../models");

module.exports = function(router) {

    router.get('/list', function(req, res) {
        db.User.findAll({
            limit:req.query.count,
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
                console.log(o.getOrganization());
                data.push({ name: o.name, id: o.id, org: o.Organization.name });
            }
            res.json(data);

        });
    });

    router.get('/details', function(req, res) {
        db.User.find({where:{id:req.query.id}})
            .then(function(data) {
                res.json({
                    id: data.id,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: "<placeholder>",
                    image: f.image.avatar(),
                    isVoteable: res.locals.user ? true : false,
                });
            });
    });

    router.get('/vote', function(req, res) {
        console.log(req.query.candidate_id);
        res.send("Test");
    });
}