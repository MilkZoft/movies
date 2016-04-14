(function() {
    'use strict';

    define(function(require) {
        var angular = require('angular');
        var _ = require('lodash');

        angular
            .module('moviesApp')
            .controller('MoviesAppController', MoviesAppController);

        MoviesAppController.$inject = [
            'moviesDataService'
        ];

        function MoviesAppController(moviesDataService) {
            var vm = this;

            vm.filterByCategory = filterByCategory;

            moviesDataService
                .getMovies()
                .then(function(response) {
                    vm.movies = response.movies;
                    vm.filteredMovies = vm.movies;
                    vm.categories = _.uniq(vm.movies.map(function(movie) {
                        return movie.category;
                    }));
                });

            function filterByCategory(category) {
                vm.filteredMovies = vm.movies;

                if (category) {
                    vm.filteredMovies = vm.movies.filter(function(item) {
                        return item.category === category;
                    });
                }
            }
        }
    });
})();
