import React from 'react';
import Titulo from './Titulo';
import Contador from './Contador';

class CmpIntroduccion extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      cuenta: 1
    }
    // that = this;
    this.decrementar = this.decrementar.bind(this);
    this.incrementar = this.incrementar.bind(this);
  }

  decrementar() {
    // console.log('THIS: ', this)
    // console.log('Has decrementado la cuenta ' + this.state.cuenta)
    // this.props.cuenta -= 1;
    this.setState({
      cuenta: this.state.cuenta - 1
    });
  }

  incrementar() {
    // this.props.cuenta += 1;
    this.setState({
      cuenta: this.state.cuenta + 1
    });
  }

  render() {
    return (
      <div>
        {/* <p>Soy un componente ES6</p> */}
        <Titulo titulo="Mi aplicación con React" />
        <Titulo titulo="Subtitulo 2" />
        <Titulo cuenta={this.state.cuenta} />
        {/* <Contador /> */}
        <Contador dec={this.decrementar} inc={this.incrementar} cuenta={this.state.cuenta} />
      </div>
    )
  }
}

export default CmpIntroduccion;