import React from 'react';
import Color from './Color';
import CmpInterval from './CmpInterval';

class CmpCicloDeVida extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      mostrar: true
    }
    this.cambiaNum = this.cambiaNum.bind(this);
    this.cambiaMostrar = this.cambiaMostrar.bind(this);
  }

  cambiaNum(event) {
    this.setState({
      num: event.target.value
    })
  }

  cambiaMostrar() {
    this.setState({
      mostrar: !this.state.mostrar
    })
  }

  render() {
    return (
      <div>
        <p>Num: {this.state.num}</p>
        <input type="number" onChange={this.cambiaNum} value={this.state.num} />
        <Color num={this.state.num} />
        <input type="checkbox" onChange={this.cambiaMostrar} checked={this.state.mostrar} />
        {this.state.mostrar ? <CmpInterval /> : null}
      </div>
    )
  }
}

export default CmpCicloDeVida;