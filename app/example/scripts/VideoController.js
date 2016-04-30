angular
  .module('example')
  .controller('VideoController', function($scope, supersonic) {
  	var video = document.getElementById("myvideo")
	if (video.hasAttribute("controls")) {
	    video.removeAttribute("controls")   
    }
    video.controls = false
    $scope.play = function() {
    	player = document.getElementById('myvideo')
    	var paused = player.paused
    	if (paused == true) {
    		player.play()
    	} else {
    		player.pause()
    	}
    }
    $scope.test = "hi"
  });
