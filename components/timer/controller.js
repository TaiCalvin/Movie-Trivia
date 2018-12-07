"use strict";
{
    angular.module('app')
        .controller('TimerController', function($interval){

          const $ctrl = this;
         
          $ctrl.counter = 5;
          $ctrl.startTimer = () => {
               
                        const id = $interval(function() {
                          $ctrl.counter--;
                      
                          if ($ctrl.counter === 0) {
                              $interval.cancel(id);
                              window.location = "#!/score"
                          }
                        }, 1000);
                      }
                    
        })

         
}
