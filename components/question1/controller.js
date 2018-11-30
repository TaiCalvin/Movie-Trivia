"use strict";
{
    angular.module('app')
        .controller('TriviaController', function(TriviaService){
            const $ctrl = this;

            function changes(response){
                $ctrl.movies = response.data.results
            }
            TriviaService.getMovies().then(changes);

            
        })
}