import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/Card'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
