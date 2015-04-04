'use strict';


module.exports = function(db, dialect) {
    var Vote = db.define('Vote', {
    }, {
        classMethods: {
            associate: function(models) {
                Vote.belongsTo(models.User);
                Vote.belongsTo(models.Application);
            }
        }
    });

    return Vote;
};
