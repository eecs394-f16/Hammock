angular.module('SteroidsApplication', ['supersonic'])
.controller('IndexController', function($scope, supersonic, $http) {

  // $scope.allposts = {}
  $scope.navbarTitle = "Hammock";
  $scope.eventFormat = {name:"", user_id:"", location: "", start_time:"", end_time:"", "event":""};
  $scope.newEvent    = {data : {name:"", user_id:"", location: "", start_time:"", end_time:"", theEvent:""}};
  
  $scope.getEvents = function(){
    $http.get("http://tree2hammock.herokuapp.com/getLiveEvents")
      .success(function(data) {
        $scope.allposts = data;
      })
      .error(function(err){
        // console.log("The error is: " + err);
        $scope.allposts = JSON.stringify(err);
      });
  }
  
  $scope.sendEventForm = function(){
    
    // $scope.tempCreate = "New Event Created";

    $http.post("http://tree2hammock.herokuapp.com/addNewEvent", JSON.stringify($scope.newEvent))
      .success(function(res){
        $scope.newEvent = $scope.eventFormat;
        $scope.getEvents();
      }).error(function(err){
        $scope.tempCreate = "Not created"
      })
  }

});
