angular
  .module('event_more_info')
  .controller('IndexController', function($scope, supersonic) {
    supersonic.data.channel('event').subscribe(function(message) {
      supersonic.logger.log(message.event)
    }
  });
