'use strict';

/**
 * @ngdoc function
 * @name angularNewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularNewsApp
 */
angular.module('angularNewsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
