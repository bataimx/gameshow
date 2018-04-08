import React, { Component } from 'react';
import talker from './talker.js';

class ShortBreak extends Component {

  componentWillMount(){
    let that = this,
        msg = ['Are you ready to The next question', 'Now The next question', 'Do you want to go next level'],
        rad = Math.round(Math.random() * msg.length);
    setTimeout(function() {
      if (that.props.questionNo < 1) {
        talker('Are you ready to start the Game');
      }else{
        talker(msg[rad]);
      }
    }, 1000);
  }

  render() {
    var s = this.props.questionNo < 1 ? (
        <button
          className="btn btn-success btn-lg"
          onClick={()=>{
            talker('Now let start the first question', ()=>{
              this.props.updateBreak(false);
            });
          }}
        >Start</button>
      ) : (
        <button
          className="btn btn-success btn-lg"
          onClick={()=>{
            talker('Now the next question', ()=>{
              this.props.updateBreak(false);
            });
          }}
        >Next Level</button>
      );
    return (
      <div className="row">
        <div className="col-sm-12 text-center">
          {s}
        </div>
      </div>
    );
  }
}

export default ShortBreak;