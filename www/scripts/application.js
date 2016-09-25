angular.module('SteroidsApplication', [
  'supersonic'
])
.controller('IndexController', function($scope, $http, supersonic) {

  $scope.allposts = {};
  $scope.navbarTitle = "Hammock";

  $http.get("https://tree2hammock.herokuapp.com/getLiveData")
  	.success(function(data) {
      $scope.allposts = data;
    }).error(function(err) {
  		console.log("The error is: " + err);
  	});
});
