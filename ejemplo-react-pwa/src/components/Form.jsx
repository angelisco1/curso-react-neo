import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numJokes: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.getJokes = this.getJokes.bind(this);
  }

  handleChange(event) {
    this.setState({
      numJokes: Number(event.target.value)
    })
  }

  getJokes() {
    this.props.getJokes(this.state.numJokes);
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="num">Número frases:</label>
          <input type="number" id="num" name="num" value={this.state.numJokes} onChange={this.handleChange} />
        </div>
        <button type="button" onClick={this.getJokes}>Pedir</button>
      </div>
    )
  }
}

export default Form;