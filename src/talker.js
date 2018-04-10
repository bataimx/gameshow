export default function talk(statement, callback, speed = 1){
  if ( typeof window.responsiveVoice.speak === 'function' ) {

    window.responsiveVoice.speak(statement,"UK English Male", {
      onend: function(){
        if ( typeof callback === 'function') {
          callback();
        }
      },
      rate: speed
    });

  }
}
