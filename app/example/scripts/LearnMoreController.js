angular
  .module('example')
  .controller('LearnMoreController', function($scope, supersonic) {

    $scope.openPlayer = function() {
    	var modalView = new supersonic.ui.View("example#getting-started");
		var options = {
  			animate: true
		}
		supersonic.ui.modal.show(modalView, options);
	}

  });
