import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Profile from './Profile'

const window = Dimensions.get('window');
export default class Card extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Profile/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: window.width - 40,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});
