"use strict";
{
    angular.module('app')
        .controller('ScoreController', ['TriviaService', function(TriviaService){
            const $ctrl = this;

            $ctrl.name = TriviaService.userName;
            $ctrl.trivia = TriviaService;
            
            $ctrl.home = function() {
                window.location = "#!/"
            }
            $ctrl.difficult = function() {
                window.location = " #!/difficulty"
            }
}])
}
