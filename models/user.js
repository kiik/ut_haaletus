'use strict';


//JOIN Päring kasutaja leidmiseks, kes kuulub organisatsiooni ning kes on kandideerinud:
//SELECT "User"."id", "User"."ssn", "User"."first_name", "User"."last_name", "User"."createdAt", "User"."updatedAt", "User"."OrganizationId", "Application"."id" AS "Application.id", "Application"."approved_at" AS "Application.approved_at", "Application"."createdAt" AS "Application.createdAt", "Application"."updatedAt" AS "Application.updatedAt", "Application"."UserId" AS "Application.UserId", "Organization"."id" AS "Organization.id", "Organization"."name" AS "Organization.name", "Organization"."createdAt" AS "Organization.createdAt", "Organization"."updatedAt" AS "Organization.updatedAt"
//FROM "Users" AS "User"
//INNER JOIN "Applications" AS "Application" ON "User"."id" = "Application"."UserId"
//INNER JOIN "Organizations" AS "Organization" ON "User"."OrganizationId" = "Organization"."id" LIMIT 1;

module.exports = function(db, dialect) {
    var User = db.define('User', {
          ssn: {
              type: dialect.STRING,
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
    }, {
        classMethods: {
            associate: function(models) {
            }
        },
        getterMethods: {
            name: function() {
                return this.first_name + ' ' + this.last_name;
            }
        }
    });

    return User;
};
