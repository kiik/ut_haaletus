'use strict';


module.exports = function(db, dialect) {
    var Organization = db.define('Organization', {
          name: {
              type: dialect.STRING,
              allowNull: false
          },
    }, {
        classMethods: {
            associate: function(models) {
                Organization.hasOne(models.Town);
                models.User.belongsTo(Organization);
                //Organization.hasMany(models.User);
            }
        }
    });

    return Organization;
}
