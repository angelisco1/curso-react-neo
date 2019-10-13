import React from 'react';
import Joke from './Joke';

class ListaJokes extends React.Component {
  render() {
    const listaJokes = this.props.jokes.map(j => <Joke key={j.id} texto={j.texto} />);
    return (
      <div>
        {listaJokes}
      </div>
    )
  }
}

export default ListaJokes;