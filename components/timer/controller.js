"use strict";
{
    angular.module('app')
        .controller('TimerController', function(TriviaService){

          const $ctrl = this;
         
          $ctrl.trivia = TriviaService;

         
});
}
