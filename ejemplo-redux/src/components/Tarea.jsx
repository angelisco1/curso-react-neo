import React from 'react';

class Tarea extends React.Component {
  constructor(props) {
    super(props)
    this.eliminar = this.eliminar.bind(this);
  }

  eliminar() {
    this.props.deleteTarea(this.props.tarea.id);
  }

  render() {
    return (
      <div>
        <span>{this.props.tarea.nombre}</span>
        <button type="button">{this.props.tarea.hecha ? 'Deshacer' : 'Hacer'}</button>
        <button type="button" onClick={this.eliminar}>Eliminar</button>
      </div>
    )
  }
}

export default Tarea;