angular
  .module('event_more_info')
  .controller('IndexController', function($scope, supersonic, $http) {
    supersonic.ui.views.current.whenVisible(function() {
      $scope.data = steroids.view.params.data;
    });

    // $scope.loadPage = function () {
    //   supersonic.data.channel('event_info').subscribe(function(message){
    //     $scope.data = 'test'
    //   })
    // }
    // $scope.changeData = function() {
    //   $scope.data = $scope.data
    // }
  });
