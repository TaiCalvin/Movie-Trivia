"use strict";
{
    angular.module('app')
        .controller('WelcomeController', function(TriviaService){
            const $ctrl = this;

            $ctrl.name = [];

            $ctrl.addName = function() {
                TriviaService.userName = $ctrl.userName;
                window.location = "#!/intro"
            }
            
        })
}