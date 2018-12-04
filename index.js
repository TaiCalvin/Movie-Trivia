"use strict";
{
    angular.module('app',['ngRoute', 'ngSanitize'])
        .config(function($routeProvider){
            $routeProvider
                .when('/intro', {
                    template: '<intro></intro>'
                })
        });
}