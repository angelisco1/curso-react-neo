import React from 'react';
import { connect } from 'react-redux';
import { deleteTarea, completeTarea } from '../store/tareas/actions';

class Tarea extends React.Component {
  constructor(props) {
    super(props)
    this.eliminar = this.eliminar.bind(this);
  }

  eliminar() {
    // this.props.deleteTarea(this.props.tarea.id);
    // store.dispatch(deleteTarea())
    this.props.delTarea(this.props.tarea.id)
  }

  render() {
    return (
      <div>
        <span>{this.props.tarea.nombre}</span>
        <button type="button" onClick={() => this.props.completeTarea(this.props.tarea)}>{this.props.tarea.hecha ? 'Deshacer' : 'Hacer'}</button>
        <button type="button" onClick={this.eliminar}>Eliminar</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  delTarea: deleteTarea,
  completeTarea
}

export default connect(null, mapDispatchToProps)(Tarea);