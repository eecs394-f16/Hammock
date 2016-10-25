angular
  .module('event_more_info')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    // $scope.now = function() {
    // 	supersonic.logger.log("Im here baba")
    // 	// supersonic.data.channel('sendInfo').subscribe(function(x){
    // 	// 	supersonic.logger.log(x)
    // 	// })
    // }

    supersonic.data.channel("sendInfo").subscribe(function(dataobject){
    		supersonic.logger.log(dataobject)
    		// $scope.firts(dataobject.mess)
    	})
    
    $scope.firts = function(msg) {
    	// $scope.myname = "Agam"
    	supersonic.logger.log("Im here baba")
    	
    	supersonic.logger.log(msg)
    }
  });