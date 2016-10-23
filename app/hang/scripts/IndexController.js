angular
  .module('hang')
  .controller('IndexController', function($scope, supersonic, $http) {
    $scope.sendEventForm = function() {
      $http.post("http://tree2hammock.herokuapp.com/addNewEvent", JSON.stringify($scope.newEvent))
        .success(function(res) {
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

        }).error(function(err) {
          $scope.tempCreate = "Not created";
        })
    };
    
  });
