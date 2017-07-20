const remote = require('electron').remote
const main = remote.require('./index.js')
$(document).ready(function(){

  $.get('/home/user/Documents/dev/electron/config.txt', function(data) {
         if (data.indexOf("theme{dark}") !== -1) {
                
         }
         else {
           $('.item').css("background-color", "white");
           $('#fname').css("background-color", "white");
           $('#fname').css("color", "black");
           $('.item').css("color", "black");
         }
      }, 'text');

  $("#fname").focus();
  $("#fname").on('keyup', function(e) {
      if (e.keyCode == 13) {
                
          var txt = document.getElementById('fname').value
          var exec = require('child_process').exec;

        if(txt=="chrome" || txt=="chorem" || txt=="chorme"){
            exec('google-chrome');    
            main.close();
        }

          if(txt=="al"){           
          exec('dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Play');
          main.close();
          }

          if(txt=="ause"){
          exec('dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Pause');
          main.close();
          }

          if(txt=="prev"){
          exec('dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Previous');
          exec('dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Previous');
          main.close();
          }

          if(txt=="skype"){
          exec('skypeforlinux');
          main.close();
          }

          if(txt=="ksk"){
          exec('killall skypeforlinux');
          exec('killall skypeforlinux');
          main.close();
          }

          if(txt=="nes"){
                exec('dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Next');
                main.close();
          }

          var exec = require('child_process').exec; exec(txt); 
          main.close(); 

        }
      if(e.keyCode == 27){
      main.close();
      }
  });

});
