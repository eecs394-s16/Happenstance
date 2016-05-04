angular
  .module('example')
  .controller('VideoController', function($scope, supersonic) {
  // Video
  var video = document.getElementById("myvideo");

  //Audio
  var audio = document.getElementById("myaudio");

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
        playButton.innerHTML = "&#10073;&#10073;";
      } else {
        // Pause the video
        video.pause();

        // Update the button text to 'Play'
        playButton.innerHTML = "&#9654;";
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
        playButtonAudio.innerHTML = "&#10073;&#10073;";
      } else {
        // Pause the video
        audio.pause();

        // Update the button text to 'Play'
        playButtonAudio.innerHTML = "&#9654;";
      }
    });


  });


