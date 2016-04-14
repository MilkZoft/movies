(function() {
  'use strict';

  define(function(require) {
    // Loading dependencies
    require([
      'restangular',
      'movies/movies.controller',

      // Services
      'movies/components/services/movies.module'
    ], function() {
      angular.bootstrap(document, ['moviesApp']);
    });

    var angular = require('angular');

    var moviesApp = angular.module('moviesApp', [
      'restangular',
      'movies.moviesService'
    ]);

    moviesApp.config(MoviesAppConfig);

    MoviesAppConfig.$inject = [
      'RestangularProvider'
    ];

    function MoviesAppConfig(RestangularProvider) {
      RestangularProvider.setBaseUrl('http://localhost/movies');
      RestangularProvider.setDefaultHttpFields({
        withCredentials: true
      });
    }

    moviesApp.run(['$log', function($log) {
      $log.info('Initialized the moviesApp');
    }]);
  });
})();
