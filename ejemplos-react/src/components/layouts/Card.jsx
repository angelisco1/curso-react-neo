import React from 'react';

class Card extends React.Component {
  render() {
    // console.log(this.props.children)
    return (
      <div>
        {/* <Imagen logo={this.props.card.logo} /> */}
        {/* <img width="100" src={this.props.card.logo} alt={'Logo de ' +this.props.card.nombre} />
        <h3>{this.props.card.nombre}</h3>
        <p>{this.props.card.descripcion}</p> */}
        {/* {this.props.} */}
        {/* {this.props.children[0]}
        {this.props.children[1]}
        {this.props.children[2]} */}
        {this.props.header}
        {this.props.imagen}
        {this.props.content}
      </div>
    )
  }
}

export default Card;