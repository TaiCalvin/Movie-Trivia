"use strict";
{
    angular.module('app')
        .controller('IntroController', ['TriviaService', function(TriviaService){
            const $ctrl = this;

            $ctrl.userName = TriviaService.userName;

            $ctrl.addName = function() {
                window.location = "#!/difficulty"
            }

        }])
}