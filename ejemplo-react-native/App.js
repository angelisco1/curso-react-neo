import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackLayout from './components/StackLayout';
import Header from './components/Header';
import Form from './components/Form';
import JokeList from './components/JokeList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    }
    this.getJokes = this.getJokes.bind(this);
  }

  getJokes(datos) {
    const URL = `http://api.icndb.com/jokes/random/${datos.num}${datos.nombre ? '?firstName=' + datos.nombre : ''}`;
    fetch(URL)
      .then(resp => resp.json())
      .then(datos => {
        this.setState({
          jokes: datos.value
        })
      })
  }

  render() {
    return (
      <View>
      <Header titulo="ICNDB APP" />
      <Form getJokes={this.getJokes} />
      <JokeList jokes={this.state.jokes} />
      {/* <Text>{this.state.jokes.map(j => j.joke).join(', ')}</Text> */}
    </View>
    // <View style={styles.container}>
    //   <StackLayout />
    // </View>
    // <View style={styles.container}>
    //   <Text>Bienvenidos a mi nueva App</Text>
    // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
});