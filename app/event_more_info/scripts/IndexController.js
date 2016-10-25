// angular
//   .module('event_more_info')
//   .controller('IndexController', function($scope, supersonic) {
//     // Controller functionality here
   
//     // supersonic.data.channel("sendInfo").subscribe(function(dataobject){
//     // 		supersonic.logger.log(dataobject)
//     // 		// $scope.firts(dataobject.mess)
//     // 	})
    
//     $scope.data = steroids.view.params.data;

//     $scope.firts = function() {
//     	// $scope.myname = "Agam"
//     	supersonic.logger.log("Im here baba")
    	
//     	// supersonic.logger.log(msg)
//     }

//   });

angular
  .module('event_more_info')
  .controller('IndexController', function($scope, supersonic) {
    $scope.data = steroids.view.params.data;

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