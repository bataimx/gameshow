import React, { Component } from 'react';

class Music extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.src);
    var audio = new Audio('./asset/intro.mp3');
    audio.play();
  }

  render() {
    return (
      <div>test
      </div>
    );
  }
}

export default Music;