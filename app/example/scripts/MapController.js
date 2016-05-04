angular
  .module('example')
  .controller('MapController', function($rootScope, $scope, supersonic) {
  	$rootScope.options = {
	  animate: true
	};
 //  	var map;
	// $scope.initMap = function() {
	//   map = new google.maps.Map(document.getElementById('map'), {
	//     center: {lat: -34.397, lng: 150.644},
	//     zoom: 8
	//   });
	// }
	// google.maps.event.addDomListener(window, 'load', initializeMap);

	// var options = {
	// 	center: {lat: -34.397, lng: 150.644},
	//     zoom: 8
	// };

	// function initializeMap() {
	// 	console.log("map initializing...");
	// 	$scope.map = new google.maps.Map(document.getElementById("map"), options);
	// };
	$scope.myCenter = new google.maps.LatLng(42.056897,-87.6792367);
	function initialize() {
	  var mapProp = {
	    center: $scope.myCenter,
	    zoom:12,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  $scope.map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
	
	  	//add marker

	  $scope.marker = new google.maps.Marker({
	  position: $scope.myCenter
	  });

	  $scope.marker.setMap($scope.map);

	  // add marker event listener
	  google.maps.event.addListener($scope.marker,'click',function() {
	  	var modalView = new supersonic.ui.View("example#modal");
	  	alert("modal is going to show up!");
	 	supersonic.ui.modal.show(modalView, $rootScope.options);
	  });

	}
	google.maps.event.addDomListener(window, 'load', initialize);




  });
