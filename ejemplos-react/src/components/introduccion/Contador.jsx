import React from 'react';
import PropTypes from 'prop-types';

class Contador extends React.Component {
  // cuenta = 0;
  // that = {};

  render() {
    return (
      <div>
        {/* <button onClick={() => {console.log('Has decrementado la cuenta')}}>-</button> */}
        <button onClick={this.props.dec}>-</button>
        <span>Cuenta: {this.props.cuenta}</span>
        <button onClick={this.props.inc}>+</button>
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
  inc: PropTypes.func.isRequired
}

export default Contador;