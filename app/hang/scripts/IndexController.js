angular
  .module('hang')
  .controller('IndexController', function($scope, supersonic) {
    $scope.sendEventForm = function() {
      $http.post("http://tree2hammock.herokuapp.com/addNewEvent", JSON.stringify($scope.newEvent))
        .success(function(res){
          $scope.newEvent = $scope.eventFormat;
          $scope.successmsg = "New Event Created"
          $scope.getEvents();
        }).error(function(err){
          $scope.tempCreate = "Not created"
        })
    };
  });
