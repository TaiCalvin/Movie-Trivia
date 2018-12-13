"use strict";
{
    angular.module('app')
        .service("TriviaService", ['$http', '$interval', function($http, $interval){
            const service = this;
            service.counter = 45;
            service.score = 0;
            service.startTimer = () => {
                const id = $interval(function() {
                  service.counter--;
                  if (service.counter === 0) {
                      $interval.cancel(id);
                      service.counter = 45;
                      window.location = "#!/score"
                  }
                }, 1000);
              }
            service.getMoviesEasy = ($sanitize) => {
                return $http({
                    method: "GET",
                    url: "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple"
                });
            }
            service.getMoviesMedium = () => {
                return $http({
                    method: "GET",
                    url: "https://opentdb.com/api.php?amount=1&category=11&difficulty=medium&type=multiple"
                });
            }
            service.getMoviesDifficult= () => {
                return $http({
                    method: "GET",
                    url: "https://opentdb.com/api.php?amount=1&category=11&difficulty=hard&type=multiple"
                })
            }
            
        }])

}