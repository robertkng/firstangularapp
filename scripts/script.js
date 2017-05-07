// register controller with module

var myApp = angular
              .module("myModule", [])
              .controller("myController", function($scope) {
                var employees = [
                  { name: "Ben", gender: 'male', salary: '100000', city: 'New York'},
                  { name: "Charlie", gender: 'male', salary: '10000', city: 'London'},
                  { name: "Sara", gender: 'female', salary: '10000', city: 'New Jersey'},
                  { name: "Betty", gender: 'female', salary: '1000', city: 'New York'},
                ];
                $scope.employees = employees;

                $scope.search = function(item) {
                  if ($scope.searchText === undefined) {
                    return false;
                  } else {
                    if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) !== -1 ||
                      item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) !== -1 ) {
                      return true;
                    }
                  }
                  return false;
                }

                });




