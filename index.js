"use strict";
{
    angular.module('app',['ngRoute'])
        .config(function($routeProvider){
            $routeProvider
                .when('/intro', {
                    template: '<intro></intro>'
                })
        });
}