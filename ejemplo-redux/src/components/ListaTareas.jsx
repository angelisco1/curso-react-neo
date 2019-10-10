import React from 'react';
import Tarea from './Tarea';

class ListaTareas extends React.Component {
  render() {
    const cmpsTareas = this.props.tareas.map(t => <Tarea key={t.id} tarea={t} deleteTarea={this.props.deleteTarea} />)
    return (
      <React.Fragment>
        <h2>Mis Tareas</h2>
        <div>
          {cmpsTareas}
        </div>
      </React.Fragment>
    )
  }
}

export default ListaTareas;