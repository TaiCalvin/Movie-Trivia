"use strict";
{
<<<<<<< HEAD
    angular.module('app')
        .component('timer', {
            controller: 'TimerController',
            templateUrl: 'components/timer/timer.html'
        })
}
=======
    function startTimer(){
        var counter = 60;
        setInterval(function() {
          counter--;
          if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
          }
          if (counter === 0) {
              alert('sorry, out of time');
              clearInterval(counter);
          }
        }, 1000);
      }
      $("#startClock").click(function(){
          startTimer();
       });
    
}

>>>>>>> d50bb1eb708573f662e0972b654caa9bbfca9276
