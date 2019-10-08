import React from 'react';
import PropTypes from 'prop-types';

class Contador extends React.Component {
  // cuenta = 0;
  // that = {};
  constructor(props) {
    super(props);
    this.resetear = this.resetear.bind(this);
    this.cambiaCuenta = this.cambiaCuenta.bind(this);
  }

  resetear(event) {
    // console.log(event.target.textContent);
    this.props.cambiaCuenta(0);
  }

  cambiaCuenta(event) {
    this.props.cambiaCuenta(Number(event.target.value));
  }

  render() {
    return (
      <div>
        {/* <button onClick={() => {console.log('Has decrementado la cuenta')}}>-</button> */}
        <button onClick={this.props.dec}>-</button>
        <span>Cuenta: {this.props.cuenta}</span>
        <button onClick={this.props.inc}>+</button>
        <button onClick={this.resetear}>Resetear cuenta</button>
        <input type="number" value={this.props.cuenta} onChange={this.cambiaCuenta} />
      </div>
    )
  }
}

// Contador.defaultProps = {
//   cuenta: 0
// }

Contador.propTypes = {
  cuenta: PropTypes.number.isRequired,
  dec: PropTypes.func.isRequired,
  inc: PropTypes.func.isRequired,
  cambiaCuenta: PropTypes.func.isRequired,
}

export default Contador;