angular.module('SteroidsApplication', [
  'supersonic'
])
.controller('IndexController', function($scope, $http, supersonic) {

  $scope.allposts = {};
  $scope.navbarTitle = "Hammock";
  $scope.boxColors = [
    "#58B947",
    "#7FCECD",
    "#5091CD",
    "#EDE93B",
    "#FFC520",
    "#EF553F",
    "#008656",
    "#007FA4",
    "#0D2D6C",
    "#D9C826",
    "#CA7C1B",
    "#D85820"
  ];

  $http.get("https://tree2hammock.herokuapp.com/getLiveData")
  	.success(function(data) {
      $scope.allposts = data;
    }).error(function(err) {
  		console.log("The error is: " + err);
  	});
});
