import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';


class JokeList extends React.Component {
  render() {
    // const jokesList = this.props.jokes.map(j => <Text key={j.id}>{j.joke}</Text>)
    return (
      <View>
        {/* <ScrollView>
          {jokesList}
        </ScrollView> */}
        <FlatList data={this.props.jokes}
                  renderItem={({item}) => <Text>{item.joke}</Text>}
                  keyExtractor={(item) => item.id+''} />
      </View>
    );
  }
}

export default JokeList;