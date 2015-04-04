'use strict';


module.exports = function(db, dialect) {
    var User = db.define('User', {
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

    return User;
};
