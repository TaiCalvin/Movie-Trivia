"use strict";
{
    angular.module('app')
        .controller('DifficultyController', function($scope){

            $scope.mydata = "please select your level.";

            $scope.changeColor = function(color, index, bool) {
                if(bool === true) {
                    switch(index) {
                        case 1:
                            $scope.Colour1 = {backgroundColor: '#'+color}; 
                            $scope.txtcolor = {color: 'yellow'};
                            $scope.mydata = "Easy Difficulty";
                            break;
                        case 2:
                            $scope.Colour2 = {backgroundColor: '#'+color};
                            $scope.txtcolor = {color: 'green'}; 
                            $scope.mydata = "Medium Difficulty";
                            break;
                        case 3:
                            $scope.Colour3 = {backgroundColor: '#'+color};
                            $scope.txtcolor = {color: 'red'}; 
                            $scope.mydata = "Hard Difficulty";
                            break;                                                        
                    }
                } else if (bool === false) {
                    console.log('leave');
                    $scope.Colour1 = {backgroundColor: '#ffffff'};
                    $scope.Colour2 = {backgroundColor: '#ffffff'};
                    $scope.Colour3 = {backgroundColor: '#ffffff'};
                };
            }
            $scope.pagelink = function() {
                $scope.myVar = true;
            }
            
        })
}