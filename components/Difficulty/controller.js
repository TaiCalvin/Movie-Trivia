"use strict";
{
    angular.module('app')
        .controller('DifficultyController', ['TriviaService', function(TriviaService){
            const $ctrl = this;

            $ctrl.goEasy = function() {
                window.location = "#!/trivia1"
               TriviaService.startTimer();
            }

            $ctrl.goMedium = function() {
                window.location = "#!/trivia2"
                TriviaService.startTimer();
            }

            $ctrl.goHard = function() {
                window.location = "#!/trivia3"
                TriviaService.startTimer();
            }
            
            
        }])
}

