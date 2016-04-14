(function() {
  'use strict';

  define(function(require) {
    // Loading dependencies
    require([
      'restangular',
      'movies/movies.constants',
      'movies/movies.controller',

      // Services
      'movies/components/services/movies.module'
    ], function() {
      angular.bootstrap(document, ['moviesApp']);
    });

    var angular = require('angular');

    var moviesApp = angular.module('moviesApp', [
      'moviesConstants',
      'restangular',
      'movies.usersService'
    ]);

    moviesApp.config(moviesAppConfig);

    moviesAppConfig.$inject = [
      '__',
      'RestangularProvider'
    ];

    function MoviesAppConfig(CONFIG, __, RestangularProvider) {
      RestangularProvider.setBaseUrl(CONFIG.baseApi);
      RestangularProvider.setDefaultHttpFields({
        withCredentials: true
      });
    }

    moviesApp.run(['$log', function($log) {
      $log.info('Initialized the moviesApp');
    }]);
  });
})();
