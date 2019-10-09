import React from 'react';
import Loader from './Loader';

const withData = (WrappedCmp, url) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        frases: [],
        cargando: true
      }
    }

    componentDidMount() {
      setTimeout(() => {
        fetch(url)
          .then(resp => resp.json())
          .then(datos => {
            this.setState({
              frases: datos.value,
              cargando: false
            })
          })
      }, 2000)
    }

    render() {
      return (
        this.state.cargando ? <Loader /> : <WrappedCmp {...this.props} frases={this.state.frases} />
      );
    }
  }
}

export default withData;

// const NuevaListaFrases = withData(ListaFrases, '')
// const NuevaListaFrases = withData(ListaTareas, '')
{/* <NuevaListaFrases prop={1} /> */}