angular
  .module('hang')
  .controller('IndexController', function($scope, supersonic, $http) {
    $scope.sendEventForm = function() {
      $http.post("http://tree2hammock.herokuapp.com/addNewEvent", JSON.stringify($scope.newEvent))
        .success(function(res) {
          $scope.newEvent = $scope.eventFormat;
          $scope.successmsg = "New Event Created";

          supersonic.data.channel('eventAdded').publish({event: "added"});
        }).error(function(err) {
          $scope.tempCreate = "Not created";
        })
    };
    
  });
