import React from 'react';

class ListaMascotas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mascotas: [
        {id: 1, nombre: 'Periquito'},
        {id: 2, nombre: 'Gato'},
        {id: 3, nombre: 'Perro'}
      ]
    }
  }

  render() {
    const listaMascotas = this.state.mascotas.map((m, pos) => {
      return <li key={m.id}>{m.nombre}</li>;
    })
    return (
      <ul>
        {listaMascotas}
      </ul>
    )
  }
}

export default ListaMascotas;