'use strict';

var dialect = require('sequelize');
var db = require('../core');

var Countie = require('./Countie');


var Town = db.define('towns', {
      name: {
          type: dialect.STRING,
          allowNull: false
      },
});

Town.belongsTo(Countie);


Town.sync().then(function() {
    Town.bulkCreate([
        { countyId: 2, name: 'Tallinn' },
        { countyId: 4, name: 'Tartu' },
        { countyId: 3, name: 'Narva' },
        { countyId: 1, name: 'Pärnu' },
        { countyId: 1, name: 'Nõmme' },
        { countyId: 6, name: 'Viljandi' },
        { countyId: 12, name: 'Valga' },
        { countyId: 5, name: 'Rakvere' },
        { countyId: 8, name: 'Võru' },
        { countyId: 5, name: 'Haapsalu' },
        { countyId: 9, name: 'Kuressaare' },
        { countyId: 5, name: 'Tapa' },
        { countyId: 11, name: 'Paide' },
        { countyId: 11, name: 'Türi' },
        { countyId: 12, name: 'Mustvee' },
        { countyId: 10, name: 'Põltsamaa' },
        { countyId: 12, name: 'Tõrva' },
        { countyId: 6, name: 'Mõisaküla' },
        { countyId: 3, name: 'Jõhvi' },
        { countyId: 12, name: 'Otepää' },
        { countyId: 5, name: 'Kunda' },
        { countyId: 1, name: 'Sindi' },
        { countyId: 4, name: 'Elva' },
        { countyId: 4, name: 'Kallaste' },
        { countyId: 8, name: 'Antsla' },
        { countyId: 15, name: 'Kärdla' },
        { countyId: 1, name: 'Kilingi-Nõmme' },
        { countyId: 10, name: 'Jõgeva' },
        { countyId: 6, name: 'Suure-Jaani' },
        { countyId: 2, name: 'Keila' },
        { countyId: 2, name: 'Paldiski' },
    ]).then(function() {
        console.log("[DB]Created towns.");
    });
});


module.exports = Town;
