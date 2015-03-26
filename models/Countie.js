'use strict';

var dialect = require('sequelize');
var db = require('../core');


var Countie = db.define('counties', {
      name: {
          type: dialect.STRING,
          allowNull: false
      },
});

Countie.sync().then(function() {
    Countie.bulkCreate([
        { 'id': 1, name: 'Pärnu maakond' },
        { 'id': 2, name: 'Harju maakond' },
        { 'id': 3, name: 'Ida-Virumaa' },
        { 'id': 4, name: 'Tartumaa' },
        { 'id': 5, name: 'Lääne-Virumaa' },
        { 'id': 6, name: 'Viljandimaa' },
        { 'id': 7, name: 'Raplamaa' },
        { 'id': 8, name: 'Võrumaa' },
        { 'id': 9, name: 'Saaremaa ' },
        { 'id': 10, name: 'Jõgevamaa' },
        { 'id': 11, name: 'Järva maakond' },
        { 'id': 12, name: 'Valgamaa' },
        { 'id': 13, name: 'Põlvamaa' },
        { 'id': 14, name: 'Läänemaa' },
        { 'id': 15, name: 'Hiiumaa' },
    ]).then(function() {
        console.log("[DB]Created counties.");
    });
});


module.exports = Countie;
