import React from 'react';
import ListaJokes from './ListaJokes';
import FavJokes from './FavJokes';
import Form from './Form';

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrarFav: true,
      listaJokes: []
    }
    this.getJokes = this.getJokes.bind(this);
  }

  getJokes(numJokes = 1, nombre, apellidos) {
    fetch(`http://api.icndb.com/jokes/random/${numJokes}`)
      .then(resp => resp.json())
      .then(datos => {
        const jokes = datos.value.map(j => ({id: j.id, texto: j.joke}))
        this.setState({
          listaJokes: jokes
        })
      })
      .catch(err => {
        this.setState({
          listaJokes: []
        })
      })
  }

  render() {
    return (
      <div>
        <Form getJokes={this.getJokes} />
        {this.state.listaJokes.length > 0 ? <ListaJokes jokes={this.state.listaJokes} /> : <p>No hay frases</p>}
        <hr/>
        {this.state.mostrarFav ? <FavJokes /> : null}
      </div>
    );
  }
}

export default Index;