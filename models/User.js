'use strict';

var dialect = require('sequelize');
var db = require('../core');


var User = db.define('users', {
      ssn: {
          type: dialect.BIGINT,
          unique: true,
          allowNull: false
      },
      first_name: {
          type: dialect.STRING,
          allowNull: false
      },
      last_name: {
          type: dialect.STRING,
          allowNull: false
      },
});


User.sync({force: true}).then(function () {
    return User.create({
        ssn: 39403062715,
        first_name: 'Meelik',
        last_name: 'Kiik',
    });
});


module.exports = User;
