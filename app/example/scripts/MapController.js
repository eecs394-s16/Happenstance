angular
  .module('example')
  .controller('MapController', function($scope, supersonic) {

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

	function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);


  });
