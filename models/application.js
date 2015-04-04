'use strict';


module.exports = function(db, dialect) {
    var Application = db.define('Application', {
          approved_at: {
              type: dialect.STRING,
              allowNull: false
          },
    }, {
        classMethods: {
            associate: function(models) {
                models.User.hasMany(Application);
                models.Organization.hasMany(Application);
            }
        }
    });

    return Application;
}
