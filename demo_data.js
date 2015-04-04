'use strict';

module.exports = {
    create_demo_data: function (db) {
        db.Countie.bulkCreate([
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


        db.Town.bulkCreate([
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

        db.Organization.bulkCreate([
                { name: 'Proto-Tüübid' },
                { name: 'UIWeb' },
        ]).then(function() {
            console.log("[DB]Created demo organizations.");
        });
    }
}
