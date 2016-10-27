angular
  .module('hang')
  .controller('IndexController', function($scope, supersonic, $http) {
    $scope.sendEventForm = function() {
      // Get location data
      supersonic.device.geolocation.getPosition().then(function(position) {
        // Add current location to submission data
        $scope.newEvent.data.location.latitude = position.coords.latitude;
        $scope.newEvent.data.location.longitude = position.coords.longitude;
        // Add empty list of people who are going
        $scope.newEvent.data.going = [];

        return;
      }).then(function() {
        // Submit data
        return $http.post("http://tree2hammock.herokuapp.com/addNewEvent", JSON.stringify($scope.newEvent))
      }).then(function(res) {
        var options = {
          message: "Your event was created!",
          buttonLabel: "Done"
        };

        supersonic.ui.dialog.alert("Event Created", options).then(function() {
          // Publish to channel in order to notify 'mainfeed' module
          // Then 'mainfeed' module will update the feed
          supersonic.data.channel('eventAdded').publish({event: "added"});

          supersonic.ui.layers.pop(); // Go back to the feed
        });

        return;
      }).catch(function(err) {
        supersonic.logger.log(err);
      });
    };
    
  });
