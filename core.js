'use strict';

var Sequelize = require('sequelize');
var config = require('./config/development.json').sequelize;


var db = new Sequelize(config.database, config.user, config.password, {
    host: config.uri,
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

module.exports = db;

var models = require("./models/index")
