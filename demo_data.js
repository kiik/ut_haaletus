'use strict';

var f = require('faker');


function geography_data(db) {
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
        console.log('[DB]Created counties.');
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
        console.log('[DB]Created towns.');
    });
}

function user_demo(db) {
    console.log('[DB]Creating users...');
    var data = [];
    for(var i=0; i < 2000; i++) {
        data.push({
            ssn: f.finance.account(),
            first_name: f.name.firstName(),
            last_name: f.name.lastName()
        });
    }
    data.push({ ssn: 39403062715, first_name: 'Meelik', last_name: 'Kiik' });

    db.User.bulkCreate(data).then(function() {
        console.log('[DB]Created demo users');
    });
}


function org_demo(db) {
    db.Organization.bulkCreate([
            { name: 'Proto-Tüübid' },
            { name: 'UIWeb' },
            { name: 'Rühm1' },
            { name: 'Octo-Poll' },
            { name: 'KVN' },
            { name: 'Banana Power' },
    ]).then(function() {
        console.log('[DB]Created demo organizations.');
    });
}


function appl_demo(db) {
    console.log("[DB]Creating applications...");
    db.User.max('id').then(function(user_mx) {
    db.Organization.max('id').then(function(org_mx) {

        var used_ids = [];

        var id, o_id;
        for(var i=0; i < user_mx/2; i++) {
            id = f.random.number(user_mx);

            if(id in used_ids) continue;
            used_ids.push(id);
            console.log("Selected user "+id);

            db.User.find({where:{id:id}}).then(function(user) {
                //Add Organization, Application
                o_id = f.random.number(org_mx);
                db.Organization.find({where:{id: o_id}}).then(function(org) {
                    user.setOrganization(org);
                });

                db.Application.create({ approved_at: Date.now()}).then(function(appl) {
                    user.setApplication(appl);

                });
            });
        }
        console.log("[DB]Applications created");
    });
    });
}

module.exports = {
    ad: appl_demo,
    create_demo_data: function (db) {
        geography_data(db);
        user_demo(db);
        org_demo(db);
    }
}
