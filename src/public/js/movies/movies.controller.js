(function() {
  'use strict';

  define(function(require) {
    var angular = require('angular');

    var moviesApp = angular.module('moviesApp');

    moviesApp.controller('MoviesAppController', MoviesAppController);

    MoviesAppController.$inject = [
      '$scope'
    ];

    function MoviesAppController($scope) {
      var vm = this;
    }

    moviesApp.run(['$log', function($log) {
      $log.info('Inside MoviesAppController');
    }]);
  });
})();
