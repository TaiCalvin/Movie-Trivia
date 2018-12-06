"use strict";
{
    angular.module('app')
<<<<<<< HEAD
        .controller('TimerController', function($interval){

          const $ctrl = this;
          $ctrl.counter = 60;
          $ctrl.startTimer = () => {
               
                        const id = $interval(function() {
                          $ctrl.counter--;
                          if ($ctrl.counter >= 0) {
                            // span = document.getElementById("count");
                            // span.innerHTML = counter;
                          }
                          if ($ctrl.counter === 0) {
                              alert('sorry, out of time');
                              clearInterval(id);
                          }
                        }, 1000);
                      }
                    
            
        })

         
}
=======
        .component('timer', {
            controller: 'TimerController',
            templateUrl: 'components/timer/timer.html'
        })
}
>>>>>>> d50bb1eb708573f662e0972b654caa9bbfca9276
