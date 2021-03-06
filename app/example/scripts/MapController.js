angular
  .module('example')
  .controller('MapController', function($rootScope, $scope, supersonic) {
    var location1 = {
      name : 'Green Door Tavern',
      videoUrl :null,
      audioUrl : "https://s3-us-west-2.amazonaws.com/audio.happenstance/Janet+Fuller-+Speakeasies_Abridged_mixdown.mp3",
      loc : {
        lat : 41.894854,
        lng : -87.6396137
      },
      description : "Curious about the meaning behind that colorful door? Let our food expert Janet Fuller tell you all about how this popular watering hole used to be a speakeasy.",
      imageUrl : "https://s3-us-west-2.amazonaws.com/audio.happenstance/green_door_tavern.jpg",

    };    https://s3-us-west-2.amazonaws.com/audio.happenstance/green_door_tavern.jpg?X-Amz-Date=20160510T044953Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=f9a132d37fcc6517929ed941b460b0999d5cf38e4e84f02168d31c9b4846c78a&X-Amz-Credential=ASIAJ3NLGIP5K6RJNNSQ/20160510/us-west-2/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEOX//////////wEaDHN6an18CQN73uIAsSLHAdX34fSEmq18WJCd8KfG2emLbd0ALo/3KPmCPKJ2nqVeWteGvVDm5sJ5Bk2r3ERAZlKdxGVeEVHrbrRAfPqGkn/n5vqpYlX5RgizISaovx5aTKijjUuUusB7N0FErLGttEU988htDLF/g10rmXEi43mFb5TAcwJfCCRIsGhBq//GCrwHQ7cGVGO3D3lpW7JM6%2BdpqbqbOxkgWJ8fv3T6clSZVm145m/BQsgvnTlr9eYiBlom7TDu1zdv%2B32t4dIf2s3BcfPAOpwo2r/FuQU%3D

    var location2 = {
      name : ' International Museum of Surgical Science',
      videoUrl :null,
      audioUrl : "https://s3-us-west-2.amazonaws.com/audio.happenstance/Surgical+Museum_Abridged_mixdown.mp3",
      loc : {
        lat : 41.9103997,
        lng : -87.6276496
      },
      description : 'Ever thought about exchanging vows surrounded by amputation kits and ancient infant skulls? The International Museum of Surgical Science has hosted a variety of guests, even those about to say “I do.”',
      imageUrl : "https://s3-us-west-2.amazonaws.com/audio.happenstance/surgical_museum__1__720.jpg",

    };
    var location3 = {
      name : 'Northwestern University',
      videoUrl :"http://www.w3schools.com/html/mov_bbb.mp4",
      audioUrl : null,
      loc : {
        lat : 42.058044,
        lng : -87.677041
      },
      description : "Northwestern University is a private research university with campuses in Evanston and Chicago in Illinois, United States, as well as Doha, Qatar.",
      imageUrl : "https://geo1.ggpht.com/cbk?panoid=JQKsWM6AZwFa93Rc0Zo7-g&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=256&yaw=82.027817&pitch=0",

    };

    var locations = [location1, location2, location3];

  	$rootScope.options = {
	  animate: true
	};


	$scope.myCenter = new google.maps.LatLng(41.904373,-87.6336537);
	function initialize() {
	  var mapProp = {
	    center: $scope.myCenter,
	    zoom:14,
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
		  	// alert("modal is going to show up!");
		  	window.localStorage.setItem("clicked_location", JSON.stringify(location));
		 	$("#myModal").modal();
		 	// supersonic.ui.modal.show(modalView, $rootScope.options);
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





	//*******************************************
	//***      Modal logic **********************

	







  });
