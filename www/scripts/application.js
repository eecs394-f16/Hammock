angular.module('SteroidsApplication', ['supersonic'])
.controller('IndexController', function($scope, supersonic, $http) {

  // $scope.allposts = {}
  $scope.navbarTitle = "Hammock";
  $scope.eventFormat = {data : {name:"", user_id:"", location: "", start_time:"", end_time:"", "event":""}};
  $scope.newEvent    = {data : {name:"", user_id:"", location: "", start_time:"", end_time:"", theEvent:""}};
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
    
    $http.post("http://tree2hammock.herokuapp.com/addNewEvent", JSON.stringify($scope.newEvent))
      .success(function(res){
        $scope.newEvent = $scope.eventFormat;
        $scope.getEvents();
      }).error(function(err){
        $scope.tempCreate = "Not created"
      })
  }

});
