import React, { Component } from 'react';
import talker from './talker.js';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question : "d-none",
      a: "d-none",
      b: "d-none",
      c: "d-none",
      d: "d-none",
      "order": ["d", "c", "b", "a", "question"],
      "answerSelected": "",
      "showResult": false
    };
  }

  checkResult(e){
    let that = this,
        answer = this.props.items.answer;

    if (e === answer) {
      talker('Congratulation! your choose is Corrected! ', function(){
        that.props.resultAnswer(true);
        return true;
      });
    }else{
      talker('unCorrect!', function(){
        that.props.resultAnswer(false);
        return false;
      });
    }
    that.setState({
      "showResult": true
    });
  }

  componentWillMount(){
    let that = this;
    setTimeout(function() {
      that.show();
    }, 0);
  }

  show() {
    let that = this,
        stateName = this.state.order.pop(),
        updateOrder = this.state.order;

    let readQuestion = function(){
      talker(that.props.items[stateName], function(){
        if ( updateOrder.length > 0 ) {
          that.show();
        }
      });
    }

    let readAnswer = function(stateName){
      talker(stateName+ ': ' + that.props.items[stateName], function(){
        if ( updateOrder.length > 0 ) {
          that.show();
        }
      });
    }

    if (stateName === 'question') {
      talker(`The question number ${this.props.questionNo + 1}`, function(){
        readQuestion();
      });
    }else{
      readAnswer(stateName);
    }

    this.setState({
      [stateName] : "",
      "order": updateOrder
    });
  }

  beforeChoice(e){
    let that = this,
        message = 'Your choice is: '+ e + ': '+ that.props.items[e];
    talker(message, function(){
      that.checkResult(e);
    });
    this.setState({
      "answerSelected": e
    });
  }

  render() {
    let item = this.props.items,
        clsA = this.state.answerSelected === 'a' ? 'btn-success' : '',
        clsB = this.state.answerSelected === 'b' ? 'btn-success' : '',
        clsC = this.state.answerSelected === 'c' ? 'btn-success' : '',
        clsD = this.state.answerSelected === 'd' ? 'btn-success' : '';

        if (this.state.showResult) {
          clsA += item.answer === 'a' ? ' flash' : '';
          clsB += item.answer === 'b' ? ' flash' : '';
          clsC += item.answer === 'c' ? ' flash' : '';
          clsD += item.answer === 'd' ? ' flash' : '';
        }

    return (
      <div className="row text-center">
        <div className={`col-md-8 offset-md-2 paddingbottom-40 title ${this.state.question}`}>
          <h2>{item.question}</h2>
        </div>
        <div className={`col-md-6 paddingbottom-40 ${this.state.a}`}>
          <button className={`btn btn-primary btn-lg btn-block ${clsA}`} onClick={()=>{ this.beforeChoice('a'); }} value="a1">A. {item.a}</button>
        </div>
        <div className={`col-md-6 paddingbottom-40 ${this.state.b}`}>
          <button className={`btn btn-primary btn-lg btn-block ${clsB}`} onClick={()=>{ this.beforeChoice('b'); }} value="a2">B. {item.b}</button>
        </div>
        <div className={`col-md-6 paddingbottom-40 ${this.state.c}`}>
          <button className={`btn btn-primary btn-lg btn-block ${clsC}`} onClick={()=>{ this.beforeChoice('c'); }} value="a3">C. {item.c}</button>
        </div>
        <div className={`col-md-6 paddingbottom-40 ${this.state.d}`}>
          <button className={`btn btn-primary btn-lg btn-block ${clsD}`} onClick={()=>{ this.beforeChoice('d'); }} value="a4">D. {item.d}</button>
        </div>
      </div>
    );
  }
}

export default Question;