import React, { Component } from 'react';

class Qlist extends Component {
  render() {
    var active = this.props.active;
    var list = this.props.items.map(function(item, index) {
      if (active === item.id) {
        return (
          <li key={index}>
            <button className="btn btn-lg btn-success btn-block disabled" >Question {item.id}</button>
          </li>
        );
      }else{
        return (
          <li key={index}>
            <button className="btn btn-lg btn-light btn-block disabled" >Question {item.id}</button>
          </li>
        );
      }
    });
    return (
      <ul className="question-list list-unstyled">
        {list}
      </ul>
    );
  }
}

export default Qlist;