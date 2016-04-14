(function() {
  'use strict';

  define(function(require) {
    var angular = require('angular');

    var moviesDataService = angular.module('movies.moviesDataService', [
      'restangular'
    ]);

    moviesDataService
      .factory('moviesDataService', MoviesDataService);

    MoviesDataService.$inject = [
      'Restangular'
    ];

    function MoviesDataService(Restangular) {
      return {
        getMovies: function() {
          return Restangular.one('movies.json').get();
        }
      };
    }

    moviesDataService.run(['$log', function($log) {
      $log.info('Inside Movies Service');
    }]);
  });
})();
