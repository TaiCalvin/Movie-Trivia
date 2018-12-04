"use strict";
{
    angular.module('app')
        .controller('WelcomeController', function(TriviaService){
            const $ctrl = this;

            $ctrl.name = [];

            $ctrl.addName = function() {
                window.location = "#!/intro"
            }
            
        })
}