import React from 'react';
import Card from './Card';

class CmpLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      libreriasJs: [
        {id: 0, nombre: 'React', descripcion: 'Jamón ipsum caballero vino rioja persiana fregona pero tronco mis farruco lo suyo con colarse corriendo, y piñazo canario vergüenza la salta! Más fútbol año los reconquista y vagueando, quinto pino asturiana un canción pero chiquilla sus persiana, paliza mi pasan manchego tus amiga truhán clásico así Lepe y brutal charanga chinchón fabada a diestro y siniestro.', logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'},
        {id: 1, nombre: 'Vue', descripcion: 'Minions ipsum pepete hana dul sae bee do bee do bee do me want bananaaa! Tulaliloo butt baboiii bappleees butt underweaaar. Daa pepete potatoooo bee do bee do bee do butt potatoooo baboiii jeje. Poulet tikka masala pepete potatoooo ti aamoo!', logo: 'https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png'}
      ]
    }
  }

  render() {
    // const listaCards = this.state.libreriasJs.map(c => <Card key={c.id} card={c} />)
    const listaCards = this.state.libreriasJs.map((c, pos) => {
      const header = pos % 2 === 0 ? <img width="100" src={c.logo} alt={'Logo de ' + c.nombre} /> : <h3>{c.nombre}</h3>;
      const imagen = pos % 2 === 0 ? <h3>{c.nombre}</h3> : <img width="100" src={c.logo} alt={'Logo de ' + c.nombre} />;
      const content = <p>{c.descripcion}</p>;
      return (
        <Card key={c.id} header={header} imagen={imagen} content={content} />
      )
    })
    // const listaCards = this.state.libreriasJs.map((c, pos) => {
    //   return (<Card key={c.id}>
    //     {pos % 2 === 0 ? <img width="100" src={c.logo} alt={'Logo de ' + c.nombre} /> : <h3>{c.nombre}</h3>}
    //     {pos % 2 !== 0 ? <img width="100" src={c.logo} alt={'Logo de ' + c.nombre} /> : <h3>{c.nombre}</h3>}
    //     <p>{c.descripcion}</p>
    //   </Card>)
    // })
    return (
      <div>
        {listaCards}
      </div>
    )
  }
}

export default CmpLayout;