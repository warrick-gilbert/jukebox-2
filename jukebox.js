$(document).ready(function() {
  // promptAndPlay
  //
  // Prompts the user to enter a song.
  // Plays the entered song.
  // Repeats when the song is complete.
  //


  var promptAndPlay = function() {
    var songString = prompt("Welcome to JukeBox!\nEnter a song to play:", "F#*1 F#*1 D*1 B*1 B*1 E*1 E*1 E*1 G#*1 G#*1 A*1 B*1");
    $("#play-button").html("Playing...");    
    var song = parseSong(songString);
    playSong(song, 400, function() {
        $("#play-button").removeAttr("disabled");
        $("#play-button").html("Play");
    });
  };

  // Get things going.
  // promptAndPlay();

  $("#play-button").click(function(){
    promptAndPlay();
    $("#play-button").attr("disabled", "disabled")
  });


});