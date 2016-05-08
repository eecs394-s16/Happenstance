angular
  .module('example')
  .controller('ModalController', function($scope, supersonic) {
   

  
  var video = document.getElementById("myvideo");
  var audio = document.getElementById("myaudio");


  //   $('#myModal').on('show', function() {
  //   video.autoplay = true;
  //   video.load();
  // });

  // $('#myModal').on('hide', function() {
  //   video.autoplay = false;
  // });
  //
  $('#myModal').on('show.bs.modal', function() {
    console.log("modal showing!");
    $scope.location = JSON.parse(localStorage.getItem("clicked_location"));
    $scope.$apply();
    $scope.autoplay();

  });

  $scope.autoplay = function() {
    // Video
    video.src = $scope.location.videoUrl;
    video.load();
    video.play();

    //Audio
    audio.src = $scope.location.audioUrl;
    audio.load();
    audio.play();
  };

  $scope.stopPlay = function() {
    video.pause();
    audio.pause();
  };

  $(".modal-transparent").on('show.bs.modal', function () {
    console.log(".modal-transparent on 'show.bs.modal'");
    setTimeout( function() {
      $(".modal-backdrop").addClass("modal-backdrop-transparent");
    }, 0);
  });
  $(".modal-transparent").on('hidden.bs.modal', function () {
    console.log(".modal-transparent on 'hidden.bs.modal'");
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  });



  // Buttons
  var playButton = document.getElementById("play-pause");
  var fullScreenButton = document.getElementById("full-screen");
  var playButtonAudio = document.getElementById("play-pause-audio");

  // Sliders
  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");
  var seekBarAudio = document.getElementById("seek-bar-audio");

    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
      if (video.paused == true) {
        // Play the video
        video.play();

        // Update the button text to 'Pause'
        playButton.innerHTML = '<i class="icon super-pause orange"></i>';
      } else {
        // Pause the video
        video.pause();

        // Update the button text to 'Play'
        playButton.innerHTML = '<i class="icon super-play orange"></i>';
      }
    });

    
    // Event listener for the seek bar
    seekBar.addEventListener("change", function() {
      // Calculate the new time
      var time = video.duration * (seekBar.value / 100);

      // Update the video time
      video.currentTime = time;
    });

    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value = (100 / video.duration) * video.currentTime;

      // Update the slider value
      seekBar.value = value;
    });

    // Pause the video when the slider handle is being dragged
    seekBar.addEventListener("mousedown", function() {
      video.pause();
    });

    // Play the video when the slider handle is dropped
    seekBar.addEventListener("mouseup", function() {
      video.play();
    });

    // FOR AUDIO
    // Event listener for the seek bar
    seekBarAudio.addEventListener("change", function() {
      // Calculate the new time
      var time = audio.duration * (seekBarAudio.value / 100);

      // Update the video time
      audio.currentTime = time;
    });

    // Update the seek bar as the video plays
    audio.addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value = (100 / audio.duration) * audio.currentTime;

      // Update the slider value
      seekBarAudio.value = value;
    });

    // Pause the video when the slider handle is being dragged
    seekBarAudio.addEventListener("mousedown", function() {
      audio.pause();
    });

    // Play the video when the slider handle is dropped
    seekBarAudio.addEventListener("mouseup", function() {
      audio.play();
    });

     // Event listener for the play/pause button
    playButtonAudio.addEventListener("click", function() {
      if (audio.paused == true) {
        // Play the video
        audio.play();

        // Update the button text to 'Pause'
        playButtonAudio.innerHTML = '<i class="icon super-pause orange"></i>';
      } else {
        // Pause the video
        audio.pause();

        // Update the button text to 'Play'
        playButtonAudio.innerHTML = '<i class="icon super-play orange"></i>';
      }
    });

    $scope.modalClose = function() {
      supersonic.ui.modal.hide();
    }

  


  });


