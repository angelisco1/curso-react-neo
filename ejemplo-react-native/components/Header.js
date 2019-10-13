import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/icon.png")} />
      <Text style={styles.titulo}>{props.titulo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "row",
    backgroundColor: 'yellow',
    alignItems: 'center'
  },
  logo: {
    height: 50,
    width: 50
  },
  titulo: {
    fontSize: 20
  }
});

export default Header;