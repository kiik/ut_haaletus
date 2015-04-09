'use strict';


module.exports = function(router) {
    router.get('/', function (req, res) {
        res.json([
                { org: "UIWeb", votes: 3456 }
        ]);
    });
}
