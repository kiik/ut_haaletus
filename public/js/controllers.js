'use strict';


var uthControllers = angular.module('uthControllers', [
    'ui.bootstrap',
    'ngTable',
    'ngResource',
    'uthServices',
    'angularCharts',
]);


uthControllers.controller('indexCtrl',
    ['$scope',
    function ($scope) {
        console.log("indexCtrl()");
    }
]);

uthControllers.controller('authCtrl',
    ['$scope', '$location',
    function ($scope, $location) {
        $scope.login = function(url) {
            console.log("login");
            $location.path("/teave");
        }

        $scope.logout = function() {

        }
    }
]);


uthControllers.controller('candidateListCtrl',
    ['$scope', 'ngTableParams', 'Candidate',
    function ($scope, ngTableParams, Candidate) {
        $scope.test = "test";

        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 10,
        }, {
            total: 0,
            getData: function($defer, params) {
               Candidate.list(params.url(), function(data) {
                    params.total(data.page_count);
                    $defer.resolve(data.candidates);
               });
            }
        });
    }
]);


uthControllers.controller('candidateCtrl',
    ['$scope', '$routeParams', 'Candidate', '$http',
    function ($scope, $routeParams, Candidate, $http) {
        Candidate.get($routeParams, function(data) {
            console.log(data);
            $scope.c = data;
        });
        $scope.makeVote = function(id) {
            $http.get('/kandidaadid/vote', {params: {candidate_id:id}}).success(function() {
                console.log("Töötab");
            }).
            error(function() {
                console.log("Valesti läks.");
            });
        }
        $scope.deleteVote = function(id) {
            $http.get('/kandidaadid/delete').success(function() {
                console.log("Töötab");
            }).
            error(function() {
                console.log("Valesti läks.")
            });
        }

    }

]);


uthControllers.controller('resultsCtrl',
    ['$scope',
    function ($scope) {
        $scope.config1 = {
            title: 'Häälte jagunemine',
            tooltips: true,
            labels: false,

            legend: {
                display: true,
                position: 'right',
                htmlEnabled: false
            },

            colors: [],
            innerRadius: 70,
            lineLegend: 'lineEnd',
            lineCurveType: 'cardinal',
            isAnimate: true,
            yAxisTickFormat: 's',
            xAxisMaxTicks: 7,
            waitForHeightAndWidth: false
        };

        $scope.chart1Type = "pie";

        $scope.data = {
            series: ["UIWeb", "Rühm1", "Banana Power"],
            data: [{
                x: "UIWeb",
                y: [2428],
            },{
                x: "Rühm1",
                y: [2327],
            },{
                x: "UIWeb",
                y: [2442],
            }]
        }
    }
]);


uthControllers.controller('statisticsCtrl',
    ['$scope',
    function ($scope) {
        $scope.config1 = {
            title: 'Statistika Maakondade Grupeeringus',
            tooltips: true,
            labels: false,

            legend: {
                display: true,
                position: 'right',
                htmlEnabled: false
            },

            colors: [],
            innerRadius: 70,
            lineLegend: 'lineEnd',
            lineCurveType: 'cardinal',
            isAnimate: true,
            yAxisTickFormat: 's',
            xAxisMaxTicks: 7,
            waitForHeightAndWidth: false
        };

        $scope.config2 = {
            title: 'Häälte pindalaline jaotus',
            tooltips: true,
            labels: false,

            legend: {
                display: true,
                position: 'right',
                htmlEnabled: false
            },
        };

        $scope.chart1Type = "line";
        $scope.chart2Type = "area";

        $scope.data = {
            series: ["UIWeb", "Rühm1", "Banana Power"],
            data: [{
                x: "Harjumaa",
                y: [424, 342, 1245],
                tooltip: "Harjumaa hääled"
            }, {
                x: "Tartumaa",
                y: [1112, 123, 543],
                tooltip: "Tartumaa hääled"
            }, {
                x: "Pärnu",
                y: [242, 1412, 314],
                tooltip: "Pärnu hääled"
            }, {
                x: "Saaremaa",
                y: [650, 450, 340],
                tooltip: "Saaremaa hääled"
            }]
        }
    }
]);

uthControllers.controller('applicationCtrl',
    ['$scope',
    function ($scope) {
        console.log("applicationCtrl()");
    }
]);
