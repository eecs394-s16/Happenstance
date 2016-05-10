angular
  .module('example')
  .controller('MapController', function($rootScope, $scope, supersonic) {
    var location1 = {
      name : 'Evanston Public Library',
      videoUrl :null,
      audioUrl : "http://www.stephaniequinn.com/Music/Canon.mp3",
      loc : {
        lat : 42.048,
        lng : -87.679967,
      },
      description : "The Evanston Public Library is the public library of Evanston, Illinois. It is a department of the City of Evanston.",
      imageUrl : "https://upload.wikimedia.org/wikipedia/commons/a/a8/Evanston_Public_Library.JPG",

    };
    var location2 = {
      name : '',
      videoUrl :"http://www.w3schools.com/html/mov_bbb.mp4",
      audioUrl : null,
      loc : {
        lat : 42.058044,
        lng : -87.677041,
      },
      description : "Northwestern University is a private research university with campuses in Evanston and Chicago in Illinois, United States, as well as Doha, Qatar.",
      imageUrl : "https://geo1.ggpht.com/cbk?panoid=JQKsWM6AZwFa93Rc0Zo7-g&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=256&yaw=82.027817&pitch=0",

    };

    var locations = [location1, location2];

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

	  locations.forEach(function(location) {
	  	var marker = new google.maps.Marker({
		  position: location.loc
	  	});
	  	marker.setMap($scope.map);

	  	 // add marker event listener
		  google.maps.event.addListener(marker,'click',function() {
		  	var modalView = new supersonic.ui.View("example#modal");
		  	alert("modal is going to show up!");
		  	window.localStorage.setItem("clicked_location", JSON.stringify(location));
		 	supersonic.ui.modal.show(modalView, $rootScope.options);
		  });
	  });

	  navigator.geolocation.getCurrentPosition(onSuccess, onError);


	}
	google.maps.event.addDomListener(window, 'load', initialize);



	var onSuccess = function(position) {
		var icon = {
		   url: 'http://www.stfx.ca/sites/all/themes/stfx/js/virtualtour-SC/google-st-view/google-streetview-icon.png'
		};

		var marker = new google.maps.Marker({
		   position: {lat: position.coords.latitude, lng: position.coords.longitude},
		   icon: icon
		});
		marker.setMap($scope.map);

	    console.log('Latitude: '          + position.coords.latitude          + '\n' +
	          'Longitude: '         + position.coords.longitude         + '\n' +
	          'Altitude: '          + position.coords.altitude          + '\n' +
	          'Accuracy: '          + position.coords.accuracy          + '\n' +
	          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
	          'Heading: '           + position.coords.heading           + '\n' +
	          'Speed: '             + position.coords.speed             + '\n' +
	          'Timestamp: '         + position.timestamp                + '\n');
	};

	// onError Callback receives a PositionError object
	//
	function onError(error) {
	    alert('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
	}





  });
