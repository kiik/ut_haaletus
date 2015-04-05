'use strict';

var express = require('express');
var passport = require('passport');
var ClientCertStrategy = require('passport-client-cert').Strategy;

var User = require('./models').User;

//TODO: Insert certified user data into database
var users = ["Meelik Kiik"];
//var false = { username: "Anonymous"};

function lookupUser(cn, done) {
    var user = users.indexOf(cn) >= 0 ? { username: cn } : null;
    done(null, user);
}


function authenticate(cert, done) {
    var subject = cert.subject,
    msg = 'Attempting PKI authentication';
    if(!subject) {
        console.log(msg + ' ✘ - no subject'.red);
        done(null, false);
    } else if(!subject.CN) {
        console.log(msg + '✘ - no client CN'.red);
        done(null, false);
    } else {
        var cn = subject.CN;
        lookupUser(cn, function(err, user) {
            msg = 'Authenticating ' + cn + ' with certificate';
            if(!user) {
                console.log(msg + ' ✘ - no such user');
                done(null, false);
            } else {
                console.log(msg + ' - ✔');
                done(null, user);
            }
        });
    }
}


passport.use(new ClientCertStrategy(authenticate));

passport.serializeUser(function(user, done) {
    done(null, user.username);
});

passport.deserializeUser(function(name, done) {
    done(null, { username: name });
});

module.exports = {
    requireAuth: function(required) {
        return function(req, res, next) {
            if(!req.isAuthenticated() & required){
                req.session.messages = "You need to login to view this page";
                res.redirect('back');
                return;
            }
            console.log("authenticated");
            next();
        }
    }
};
