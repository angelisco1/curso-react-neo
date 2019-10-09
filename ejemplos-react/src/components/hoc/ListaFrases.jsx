import React from 'react';
import Frase from './Frase';

const ListaFrases = (props) => {
  const cmpFrases = props.frases.map(f => <Frase key={f.id} joke={f.joke} />);
  return (
    <div>
      {cmpFrases}
    </div>
  )
}

export default ListaFrases;