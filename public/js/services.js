'use strict';


var uthServices = angular.module('uthServices', ['ngResource']);

uthServices.factory('Candidate', ['$resource',
  function($resource){
        return $resource('/kandidaadid/details', {}, {
            list: {method:'GET', params:{}, isArray:false, url:'/kandidaadid/list'}
        });
    }
]);

