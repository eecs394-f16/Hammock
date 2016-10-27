angular
  .module('event_more_info')
  .controller('IndexController', function($scope, supersonic, $http) {
    $scope.data = JSON.parse(steroids.view.params.data);
    supersonic.logger.log($scope.data.data.going);
    $scope.going = function() {
      var options = {
        title: "Name",
        buttonLabels: ["Submit"],
        defaultText: "Enter your name"
      };

      supersonic.ui.dialog.prompt("I'm going!", options).then(function(result) {
        var params = {
          "_id": $scope.data._id,
          "name": result.input
        };

        $http.post("http://tree2hammock.herokuapp.com/addGoing", JSON.stringify(params)).then(function(res) {
          var options = {
            message: "You're going!",
            buttonLabel: "Done"
          };

          supersonic.ui.dialog.alert("Event Created", options);
        }).catch(function(err) {
          supersonic.logger.log(err);
        });
      });
    };
  });
