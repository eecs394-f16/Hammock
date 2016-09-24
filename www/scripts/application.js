angular.module('SteroidsApplication', [
  'supersonic'
])
.controller('IndexController', function($scope, supersonic) {

  $scope.navbarTitle = "Hammock";

  $scope.tempFriend = {
    name: 'Joon',
    location: 'Lakefill',
    time: 120
  };
});
