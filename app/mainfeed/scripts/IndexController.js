angular.module('mainfeed').controller('IndexController', function($scope, supersonic, $http) {
  supersonic.ui.tabs.hide();

  $scope.navbarTitle = "Hammock";
  $scope.eventFormat = {data : {name:"", user_id:"", location: "", start_time:"", end_time:"", "event":""}};
  $scope.newEvent    = {data : {name:"", user_id:"", location: "", start_time:"", end_time:"", theEvent:""}};
  $scope.boxColors = [
    "#7FCECD",
    "#5091CD",
    "#EDE93B",
    "#FFC520",
    "#EF553F",
    "#007FA4",
    "#0D2D6C",
    "#D9C826",
    "#CA7C1B",
    "#D85820"
  ];
  $scope.toggleEventInfo = function (index, data) {
    var state = document.querySelector('#box-info-'+index).style.display
    if (state === 'none' || state === '') {
      document.querySelector('#box-info-'+index).style.display = 'block'
    } else {
      document.querySelector('#box-info-'+index).style.display = 'none'
    }
  }

  $scope.getEvents = function() {
    $http.get("http://tree2hammock.herokuapp.com/getLiveEvents")
      .success(function(data) {
        $scope.allposts = data;
      })
      .error(function(err){
        // console.log("The error is: " + err);
        $scope.allposts = JSON.stringify(err);
      });
  };

  supersonic.data.channel('eventAdded').subscribe(function(message) {
    if (message.event == 'added') {
      $scope.getEvents();
    };
  });
  $scope.letsHangButton = function(_id) {
    // supersonic.logger.log($scope.allposts[0])
    for (i = 0; i < $scope.allposts.length + 1; i++) {
      supersonic.logger.log($scope.allposts[i])
    }
    // $scope.allposts.forEach(function(event, index) {
    //   supersonic.logger.log(event)
    //   // if (event._id === _id) {
    //   //   supersonic.data.channel('event').publish({data: event.data})
    //   // }
    // })
  }
});
