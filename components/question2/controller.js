"use strict";
{
    angular.module('app')
        .controller('TriviaQuestion2Controller', function(TriviaService, $timeout){
            const $ctrl = this;

            function changes(response){
                console.log('response', response.data.results);
                const results = response.data.results[0];
                $timeout(function(){

                    $ctrl.question = results.question;
                    $ctrl.correctAnswer = results.correct_answer;
                    $ctrl.movies = [...results.incorrect_answers, results.correct_answer].sort();
                    console.log($ctrl.movies);
                });
            }
            TriviaService.getMoviesMedium().then(changes);
            
            $ctrl.answerSubmit = function (answer){
                $ctrl.userAnswer = answer;
            }
            
            let counter = 0;
            $ctrl.updateQuestion = function() {
                console.log($ctrl.correctAnswer, $ctrl.userAnswer)
                if ($ctrl.correctAnswer === $ctrl.userAnswer) {
                    counter += 5;
                    console.log(counter);
                    TriviaService.getMoviesMedium().then(changes);
                }
                else {
                    TriviaService.getMoviesMedium().then(changes);
                }
            }

        })   
}
