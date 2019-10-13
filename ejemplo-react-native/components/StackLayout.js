import React from 'react';
import { View, StyleSheet } from 'react-native';


class StackLayout extends React.Component {
  render() {
    return (
      <View style={styles.padre}>
        <View style={styles.hijo}></View>
        <View style={styles.hijoPreferido}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  padre: {
    flex: 1
  },
  hijo: {
    flex: 1,
    backgroundColor: 'orange',
    // borderColor: 'yellow',
    // borderWidth: 1
  },
  hijoPreferido: {
    flex: 2,
    backgroundColor: 'yellow'
  }
})


export default StackLayout;