import React from 'react';

class CmpInterval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null
    }
  }

  componentDidMount() {
    const id = setInterval(() => {
      console.log('Se ha ejecutado...')
    }, 1500);
    this.setState({
      intervalId: id
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <p>Aquí hay un intervalo...</p>
    )
  }
}

export default CmpInterval;