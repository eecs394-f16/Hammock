angular.module('SteroidsApplication', [
  'supersonic'
])
.controller('IndexController', function($scope, $http, supersonic) {

  $scope.allposts = {}
  $scope.navbarTitle = "Hammock";

  $http.get("www.herokuapp.com/allposts")
  	.success(data){
  		$scope.allposts = data
  	}
  	.error(data){
  		console.log("The error is: " + data)
  	}
});
