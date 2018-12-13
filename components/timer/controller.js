"use strict";
{
    angular.module('app')
        .controller('TimerController', ['TriviaService', function(TriviaService){

          const $ctrl = this;
         
          $ctrl.trivia = TriviaService;

         
}]);
}
