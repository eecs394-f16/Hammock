angular.module('mainfeed').controller('IndexController', function($scope, supersonic, $http) {
  supersonic.ui.tabs.hide();

  $scope.navbarTitle = "Hammock";
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
        for (i = 0; i < data.length ; i++) {
          data[i].data.time.end = `${new Date(data[i].data.time.end).getHours().toString()}:${new Date(data[i].data.time.end).getMinutes().toString()}`
        }
        // data[0].data.time.end = new Date(data[0].data.time.end).getHours().toString()
        $scope.allposts = data;
        supersonic.logger.log(data)
      })
      .error(function(err){
        // console.log("The error is: " + err);
        $scope.allposts = JSON.stringify(err);
      });
  };

  supersonic.data.channel('eventAdded').subscribe(function(message) {
    if (message.event == 'added') {
      $scope.getEvents();
    }
  });
});
