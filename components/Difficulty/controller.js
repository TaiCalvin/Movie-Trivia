"use strict";
{
    angular.module('app')
        .controller('DifficultyController', function(TriviaService){
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
            
            
        })
}

// "use strict";
// {
//     angular.module('app')
//         .controller('IntroController', function(TriviaService){
//             const $ctrl = this;

//             $ctrl.userName = TriviaService.userName;

//             $ctrl.addName = function() {
//                 window.location = "#!/difficulty"
//             }

//         })
// }