angular
  .module('event_more_info')
  .controller('IndexController', function($scope, supersonic) {

    $scope.getEvent = function() {
      supersonic.logger.log('hi')
      supersonic.data.channel('eventInfo').subscribe(function(message) {
        $scope.data = message.data
        supersonic.logger.log(message)
      })
    }
  });
