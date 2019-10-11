import React from 'react';
import Tarea from './Tarea';
import { connect } from 'react-redux';

class ListaTareas extends React.Component {
  render() {
    const cmpsTareas = this.props.tareas.map(t => <Tarea key={t.id} tarea={t} />)
    // const cmpsTareas = this.props.tareas.map(t => <Tarea key={t.id} tarea={t} deleteTarea={this.props.deleteTarea} />)
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    tareas: state.tareas.tareas
  }
}


const withProps = connect(mapStateToProps);

export default withProps(ListaTareas);