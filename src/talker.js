export default function talk(statement, callback, speed = 1){
  window.responsiveVoice.speak(statement,"UK English Male", {
    onend: function(){
      if ( typeof callback === 'function') {
        callback();
      }
    },
    rate: speed
  });
}