import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      hecha: false
    }
    this.guardar = this.guardar.bind(this);
    this.handleInput = this.handleInput.bind(this);
    // this.handleHecha = this.handleHecha.bind(this);
    // this.handleNombre = this.handleNombre.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    })
  }

  // handleHecha(event) {
  //   this.setState({
  //     hecha: event.target.value
  //   })
  // }

  // handleNombre(event) {
  //   this.setState({
  //     nombre: event.target.value
  //   })
  // }

  guardar(event) {
    event.preventDefault();
    if (this.state.nombre) {
      this.props.addTarea(this.state);
      this.setState({
        nombre: '',
        hecha: false
      })
    }
    // console.log('Has pulsado el link')
  }

  render() {
    return (
      <React.Fragment>
        <h2>Nueva tarea</h2>
        {/* <a onClick={this.guardar} href="www.google.es">Google</a> */}
        <form>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={this.state.nombre} onChange={this.handleInput} />
          </div>
          <div>
            <label htmlFor="hecha">Hecha?:</label>
            <input type="checkbox" id="hecha" name="hecha" checked={this.state.hecha} onChange={this.handleInput} />
          </div>
          <button type="submit" onClick={this.guardar}>Guardar</button>
        </form>
      </React.Fragment>
    )
  }
}

export default Form;