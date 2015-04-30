'use strict';


var app = angular.module('uth', [
        'angular-loading-bar',
        'ngRoute',
        'uthControllers'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/index',
                controller: 'indexCtrl'
            }).
            when('/teave', {
                templateUrl: '/teave',
                controller: 'indexCtrl'
            }).
            when('/kandidaadid', {
                templateUrl: '/templates/kandidaadid/index.html',
                controller: 'candidateListCtrl'
            }).
            when('/kandidaadid/detailid/:id', {
                templateUrl: '/templates/kandidaadid/details.html',
                controller: 'candidateCtrl'
            }).
            when('/statistika', {
                templateUrl: '/templates/statistika/index.html',
                controller: 'statisticsCtrl'
            }).
            when('/tulemused', {
                templateUrl: '/templates/tulemused/index.html',
                controller: 'resultsCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);

