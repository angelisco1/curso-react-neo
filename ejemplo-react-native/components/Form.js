import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
import { TrackingConfigurations } from 'expo/build/AR';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '1',
      nombre: ''
    }
    this.handleChangeNombre = this.handleChangeNombre.bind(this);
    this.handleChangeNum = this.handleChangeNum.bind(this);
    this.getJokes = this.getJokes.bind(this);
  }

  handleChangeNombre(value) {
    // console.log(event);
    this.setState({
      nombre: value
    })
  }

  handleChangeNum(value) {
    // console.log(event);
    this.setState({
      num: value
    })
  }

getJokes() {
  this.props.getJokes(this.state);
}

  render() {
    return (
      <View>
        <View>
          <Text>Nombre:</Text>
          <TextInput placeholder="Chuck" value={this.state.nombre} onChangeText={this.handleChangeNombre} />
        </View>
        <View>
          <Text>Num frases:</Text>
          <TextInput value={this.state.num} onChangeText={this.handleChangeNum} keyboardType="numeric" />
        </View>
        <Button title="Mostrar frases" onPress={this.getJokes} />
      </View>
    )
  }
}

export default Form;