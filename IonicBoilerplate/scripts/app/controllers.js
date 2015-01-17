/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="services.ts" />
angular.module('starter.controllers', ['starter.services']).controller('AppCtrl', function ($scope) {
}).controller('HomeCtrl', function ($scope, itemsSvc) {
    $scope.items = itemsSvc.all();
}).controller('ItemCtrl', function ($scope, $stateParams, itemsSvc) {
    $scope.item = itemsSvc.find($stateParams.itemId);
});
//# sourceMappingURL=controllers.js.map
