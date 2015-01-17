/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="services.ts" />
angular.module('starter.controllers', ['starter.services'])
    .controller('AppCtrl', function($scope) {
    })
    .controller('HomeCtrl', function($scope, itemsSvc: starter.ItemsSvc) {
        $scope.items = itemsSvc.all();
    })
    .controller('ItemCtrl', function($scope, $stateParams, itemsSvc: starter.ItemsSvc) {
        $scope.item = itemsSvc.find($stateParams.itemId);
    });