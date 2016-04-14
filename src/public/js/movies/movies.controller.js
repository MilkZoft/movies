(function() {
    'use strict';

    define(function(require) {
        var angular = require('angular');

        angular
            .module('moviesApp')
            .controller('MoviesAppController', MoviesAppController);

        MoviesAppController.$inject = [
            'moviesDataService'
        ];

        function MoviesAppController(moviesDataService) {
            var vm = this;

            moviesDataService
                .getMovies()
                .then(function(response) {
                    vm.movies = response.movies;
                });
        }
    });
})();
