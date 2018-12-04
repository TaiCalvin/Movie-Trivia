"use strict";
{
    angular.module('app')
        .service("TriviaService", function($http){
            const service = this;

            service.getMovies = () => {
                return $http({
                    method: "GET",
                    url: "https://opentdb.com/api.php?amount=1&category=11"
                });
            }

            service.addName = () => {
                return 
            }
        })

}