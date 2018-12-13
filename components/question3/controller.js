"use strict";
{
    angular.module('app')
        .controller('TriviaQuestion3Controller', function(TriviaService, $timeout){
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
            TriviaService.getMoviesDifficult().then(changes);
            
            $ctrl.answerSubmit = function (answer){
                $ctrl.userAnswer = answer;
            }
            
            let counter = 0;
            $ctrl.correct = [];
            $ctrl.right = "assets/correct.svg"
            $ctrl.wrong = "assets/incorrect.svg"
            $ctrl.updateQuestion = function() {
                console.log($ctrl.correctAnswer, $ctrl.userAnswer)
                if ($ctrl.correctAnswer === $ctrl.userAnswer) {
                    TriviaService.score += 5
                    $ctrl.correct.push($ctrl.right);
                    console.log('correct!');
                    console.log(TriviaService.score);
                    TriviaService.getMoviesEasy().then(changes);
                }
                else {
                    TriviaService.getMoviesEasy().then(changes);
                    $ctrl.correct.push($ctrl.wrong);
                }
            }

        })   
}