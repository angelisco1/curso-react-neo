import React from 'react';

class CmpRef extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.audioPiolin = React.createRef();
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
  }

  playAudio() {
    this.audioPiolin.current.play();
  }

  pauseAudio() {
    this.audioPiolin.current.pause();
  }

  render() {
    return (
      <div>
        <audio src="./sonido-piolin.m4a" ref={this.audioPiolin}></audio>
        <button type="button" onClick={this.playAudio}>Play</button>
        <button type="button" onClick={this.pauseAudio}>Pause</button>
      </div>
    )
  }
}

export default CmpRef;