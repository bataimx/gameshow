import React, { Component } from 'react';
import Question from './Question';
import Qlist from './Qlist';
import ShortBreak from './ShortBreak';
import data from './data/data.json';
import talker from './talker.js';

function isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
    return false;
  }
  return true;
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { "items": [], "currQuestion": 0, "break": true };
    this.checkAnswer = this.checkAnswer.bind(this);
    this.updateBreak = this.updateBreak.bind(this);
  }

  componentWillMount() {
    this.setState({
      "items": data.items
    });
  }

  checkAnswer(r){
    if ( r ) {
      if ( this.state.items.length > this.state.currQuestion + 1 ) {
        this.setState(prevState => ({
          "currQuestion": prevState.currQuestion + 1,
          "break": true
        }));
        return true;
      }
    }else{
      this.setState({
        "currQuestion": 0,
        "break": true
      });
      return true;
    }
    talker('Congratulations you got the cup!');
    return true;
  }

  updateBreak(e){
    this.setState({
      "break": e
    });
  }

  render() {
    if (isEmpty(this.state.items)) {
      return(<div>rendering</div>);
    }
    let q = this.state.break ? (
        <ShortBreak questionNo={this.state.currQuestion} updateBreak={this.updateBreak}/>
      ):(
        <Question questionNo={this.state.currQuestion} items={this.state.items[this.state.currQuestion]} resultAnswer={this.checkAnswer} />
      );
    return (
      <div className="container bg-light">
        <div className="row">
          <div className="col-sm-12 mainApp">
            <div className="table-cell">
              {q}
            </div>
          </div>
          <div className="navbar-light">
            <button
              type="button"
              className="navbar-toggler collapsed"
              data-toggle="collapse"
              data-target="#questionlist"
              aria-expanded="false">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="questionlist" className="collapse navbar-collapse questionlist">
              <Qlist items={this.state.items} active={this.state.items[this.state.currQuestion].id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
