'use strict';


module.exports = function(db, dialect) {
    var Countie = db.define('Countie', {
          name: {
              type: dialect.STRING,
              allowNull: false
          },
    });

    return Countie;
};
