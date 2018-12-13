"use strict";
{
    angular.module('app')
        .controller('WelcomeController', ['TriviaService', function(TriviaService){
            const $ctrl = this;

            $ctrl.name = [];

            $ctrl.addName = function() {
                TriviaService.userName = $ctrl.userName;
                window.location = "#!/intro"
            }
            
        }])
}