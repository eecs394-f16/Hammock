angular
  .module('event_more_info')
  .controller('IndexController', function($scope, supersonic, $http) {
    supersonic.data.channel('event_info').subscribe(function(message){
      $scope.data = message.event
    })

    // $scope.loadPage = function () {
    //   supersonic.data.channel('event_info').subscribe(function(message){
    //     $scope.data = 'test'
    //   })
    // }
    // $scope.changeData = function() {
    //   $scope.data = $scope.data
    // }
  });
