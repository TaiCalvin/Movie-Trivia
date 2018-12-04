"use strict";
{
    angular.module('app')
        .component('intro', {
            controller: 'IntroController',
            templateUrl: 'components/Intro/intro.html',
            bindings: {
                item: '<'
            }
        })
}