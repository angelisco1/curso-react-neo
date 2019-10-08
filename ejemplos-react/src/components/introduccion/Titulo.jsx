import React from 'react';
import PropTypes from 'prop-types';

const Titulo = (props) => (
  <h2>{props.titulo} ({props.cuenta ? props.cuenta : '---'})</h2>
)

Titulo.defaultProps = {
  titulo: 'Hola mundo!'
}

Titulo.propTypes = {
  titulo: PropTypes.string.isRequired,
  cuenta: PropTypes.number
}

export default Titulo;