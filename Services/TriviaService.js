"use strict";
{
    angular.module('app')
        .service("TriviaService", function($http){
            const service = this;

            service.getMoviesEasy = ($sanitize) => {
                return $http({
                    method: "GET",
                    url: "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple"
                });
            }
            service.getMoviesMedium = () => {
                return $http({
                    method: "GET",
                    url: "https://opentdb.com/api.php?amount=11&difficulty=medium&type=multiple"
                });
            }
            service.getMoviesDifficult= () => {
                return $http({
                    method: "GET",
                    url: "https://opentdb.com/api.php?amount=11&difficulty=hard&type=multiple"
                })
            }
        })
}