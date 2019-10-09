import React from 'react';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null
    }
  }

  shouldComponentUpdate(next_props, next_state) {
    // console.log('NS: ', next_state)
    // console.log('OS: ', this.state)
    return next_state.color != this.state.color;
  }

  static getDerivedStateFromProps(props, state) {
    return {
      color: props.num < 0 ? 'red' : 'blue'
    }
  }

  render() {
    console.log('Pasa por aquí')
    const styles = {
      width: '100px',
      height: '100px',
      backgroundColor: this.state.color
    }

    return (
      <div style={styles}></div>
    )
  }
}

export default Color;