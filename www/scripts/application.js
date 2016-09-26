angular.module('SteroidsApplication', [
  'supersonic'
])
.controller('IndexController', function($scope, $http, supersonic) {

  $scope.allposts = {};
  $scope.navbarTitle = "Hammock";
  $scope.boxColors = [
    "#58B947",
    "#7FCECD",
    "#5091CD",
    "#EDE93B",
    "#FFC520",
    "#EF553F",
    "#008656",
    "#007FA4",
    "#0D2D6C",
    "#D9C826",
    "#CA7C1B",
    "#D85820"
  ];
  $scope.boxInfo = function(index, data) {
    const selectedBox = $('#box-' + index);
    const open = selectedBox.attr('data-info-open');
    if (open === 'false') {
      const infobox = $('<div></div>');
      infobox.addClass('info-box padding-vertical');

      const time = $('<p></p>');
      time.append("from " + data.start_time + " until " + data.end_time);
      infobox.append(time);

      const info = $('<p></p>');
      info.append("Activity: " + data.event);
      infobox.append(info);

      const button = $('<button></button>');
      button.addClass('button button-outline button-positive');
      button.css('float', 'right');
      button.append('I\'ll join you!');
      infobox.append(button);

      selectedBox.after(infobox);

      selectedBox.attr('data-info-open', 'true');
    } else if (open === 'true') {
      selectedBox.next().remove();

      selectedBox.attr('data-info-open', 'false');
    }

  };

  $http.get("https://tree2hammock.herokuapp.com/getLiveEvents")
  	.success(function(data) {
      $scope.allposts = data;
    }).error(function(err) {
  		console.log("The error is: " + err);
  	});
});
