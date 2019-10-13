import React from 'react';
import ListaJokes from './ListaJokes';

class FavJokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    }
  }

  componentDidMount() {
    fetch('https://ejemplos-dc1c1.firebaseio.com/icndb/favJokes.json')
      .then(resp => resp.json())
      .then(datos => {
        const jokes = [];
        for (let id in datos) {
          jokes.push({id: id, idIcndb: datos[id].id, texto: datos[id].texto})
        }
        this.setState({
          jokes: jokes
        })
      })
  }

  render() {
    return (
      <div>
        <ListaJokes jokes={this.state.jokes} />
      </div>
    )
  }
}

export default FavJokes;