'use strict';


module.exports = function(db, dialect) {
    var Town = db.define('Town', {
          name: {
              type: dialect.STRING,
              allowNull: false
          },
    }, {
        classMethods: {
            associate: function(models) {
                Town.belongsTo(models.Countie);
            }
        }
    });

    return Town;
}
