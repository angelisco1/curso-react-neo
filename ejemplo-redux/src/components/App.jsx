import React from 'react';
import ListaTareas from './ListaTareas';
import Form from './Form';
import { connect } from 'react-redux';
import { initTareas } from '../store/tareas/actions';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   tareas: [
  //   //     {id: 0, nombre: 'Acabar mi lista de tareas', hecha: false},
  //   //     {id: 1, nombre: 'Ver TWD', hecha: true}
  //   //   ],
  //   //   nextId: 2
  //   // }
  //   // this.addTarea = this.addTarea.bind(this);
  //   // this.deleteTarea = this.deleteTarea.bind(this);
  // }

  // deleteTarea(id) {
  //   const nuevaListaTareas = this.state.tareas.filter(t => t.id != id);
  //   this.setState({
  //     tareas: nuevaListaTareas
  //   })
  // }

  // addTarea(tarea) {
  //   const nuevaTarea = {...tarea, id: this.state.nextId};
  //   const nuevaListaTareas = [...this.state.tareas, nuevaTarea]
  //   this.setState({
  //     tareas: nuevaListaTareas,
  //     nextId: this.state.nextId + 1
  //   });
  // }

  componentDidMount() {
    this.props.initTareas();
  }

  render() {
    return (
      <div>
        <Form />
        <ListaTareas />
      </div>
    )
  }
}

const mapDispatchToProps = {
  initTareas
}

export default connect(null, mapDispatchToProps)(App);