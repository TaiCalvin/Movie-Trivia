"use strict";
{
    angular.module('app',['ngRoute', 'ngSanitize'])
        .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    template: '<welcome></welcome>'
                })
                .when('/intro', {
                    template: '<intro></intro>'
                })
                .when('/trivia1', {
                    template: '<trivia1></trivia1>'
                })
                .when('/trivia2', {
                    template: '<trivia2></trivia2>'
                })
                .when('/trivia3', {
                    template: '<trivia3></trivia3>'
                })
                .when('/difficulty', {
                    template: '<difficulty></difficulty>'
                })
        });
        
}