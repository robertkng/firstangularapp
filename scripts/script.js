// register controller with module

var myApp = angular
              .module("myModule", [])
              .controller("myController", function($scope) {
                var technologies = [
                  { name: "JavaScript", likes: 1, dislikes: 2 },
                  { name: "React", likes: 1, dislikes: 2 },
                  { name: "Angular", likes: 1, dislikes: 2 }
                ];
                $scope.technologies = technologies;

                $scope.incrementLikes = function (technology) {
                  technology.likes++;
                }

                $scope.incrementDislikes = function (technology) {
                  technology.dislikes++;
                };
                });




