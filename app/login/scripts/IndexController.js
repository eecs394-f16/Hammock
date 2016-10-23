angular
  .module('login')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    $scope.successmsg = "ji";
    $scope.sendEventForm = function() {
      if ($scope.username == "Hi" && $scope.password == "hi"){
      		$scope.successmsg = "jijijijij";
        }
      else{
      	$scope.successmsg = "False";
      }
    };
  });