import React from 'react';
import withData from './withData';
import ListaFrases from './ListaFrases';

class CmpHoc extends React.Component {

  render() {
    const ListaConFrases = withData(ListaFrases, 'http://api.icndb.com/jokes/random/3');
    return (
      <ListaConFrases />
    )
  }
}

export default CmpHoc;