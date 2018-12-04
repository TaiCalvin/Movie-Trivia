"use strict";
{
    angular.module('app')
        .component('difficulty', {
            controller: 'DifficultyController',
            templateUrl: 'components/difficulty/difficulty.html'
        })
}
// {
//     angular.module('app',['ngComponentRouter', 'trivia'])
//         .config(function($locationProvider) {
// 		  $locationProvider.html5Mode(true);
// 		})
// 		.value('$routerRootComponent', 'app')
//         .component('difficulty', {
//             controller: 'DifficultyController',
//             templateUrl: 'components/difficulty/difficulty.html',
//             $routeConfig: [
// 		    {path: '/trivia/...', name: 'Trivia', component: 'trivia' }
// 		  ]
//         })

// }