angular.module('SteroidsApplication', [
  'supersonic'
])
.controller('IndexController', function($scope, $http, supersonic) {

  $scope.allposts = {}
  $scope.navbarTitle = "Hammock";

  $scope.tempFriend = {
    name: 'Joon',
    location: 'Lakefill',
    time: 120
  };

  $http.get("www.herokuapp.com/allposts")
  	.success(function(data) {
  		$scope.allposts = data;
    }).error(function(err) {
  		console.log("The error is: " + err);
  	});
});
