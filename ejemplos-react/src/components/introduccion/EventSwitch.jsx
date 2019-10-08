import React from "react";

class EventSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorFondo: 'orange',
      tamanyo: '200px'
    }
    // this.cambiaColorFondo = this.cambiaColorFondo.bind(this);
    // this.cambiaTamanyoCaja = this.cambiaTamanyoCaja.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    const newState = {};
    switch (event.type) {
      case 'click':
        const color = Math.floor(Math.random()*256)
        newState['colorFondo'] = `rgb(${color}, ${color}, ${color})`;
        break;
      case 'mouseover':
        newState['tamanyo'] = Math.floor(Math.random()*300) + 50 + 'px';
        break;
      }
    this.setState(newState)
  }

  // cambiaColorFondo() {
  //   const color = Math.floor(Math.random()*256)
  //   const colorAleatorio = `rgb(${color}, ${color}, ${color})`;
  //   this.setState({
  //     colorFondo: colorAleatorio
  //   })
  // }

  // cambiaTamanyoCaja() {
  //   const tamanyoAleatorio = Math.floor(Math.random()*300) + 50 + 'px';
  //   this.setState({
  //     tamanyo: tamanyoAleatorio
  //   })
  // }

  render() {
    const styles = {
      backgroundColor: this.state.colorFondo,
      width: this.state.tamanyo,
      height: this.state.tamanyo
    }
    return (
      <div style={styles} onClick={this.handleEvent} onMouseOver={this.handleEvent}>
      </div>
    )
  }
}

export default EventSwitch;