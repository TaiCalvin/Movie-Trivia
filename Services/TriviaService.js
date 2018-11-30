"use strict";
{
    angular.module('app')
        .service("TriviaService", function($http){
            const service = this;

            service.getMovies = () => {
                return $http({
                    method: "GET",
                    url: "https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple"
                });
            }
        })
}