angular
  .module('event_more_info')
  .controller('IndexController', function($scope, supersonic) {
    $scope.data = steroids.view.params.data;
    // $scope.username = $scope.data.name
    $scope.going = function() {
      var options = {
        title: "Name",
        buttonLabels: ["Submit"],
        defaultText: "Enter your name"
      };

      supersonic.ui.dialog.prompt("I'm going!", options).then(function(result) {
        supersonic.logger.log("User clicked button number " + result.buttonIndex + " with text " + result.input);
        // TODO: Send a post request with result.input and event_id
      });
    };
  });
