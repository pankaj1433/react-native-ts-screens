import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';


const window = Dimensions.get('window');

const data = {
    'name' : 'Ankit Dev Dumra',
    'status': 'Active',
    'cust_id': 'C2100018445',
}

export default class ProfileHeader extends React.Component {

    fontStyle (Fcolor,Fsize,Fweight='normal') {
        return {
            color: Fcolor,
            fontSize: Fsize,
            fontWeight: Fweight
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.columnContainer}>
            <Text style={[this.fontStyle('#fff',18,'900')]}>{data.name}</Text>
            <View style={{ flexDirection:'row' }}>
                <Text style={[this.fontStyle('#fff',12)]}>Subscription Status:</Text>
                <Text style={[{marginLeft: 5},this.fontStyle('yellow',12)]}>{data.status}</Text>
            </View>
        </View>
        <View style={styles.columnContainer}>
            <Text style={[{textAlign:'right'},this.fontStyle('#fff',14)]}>Customer ID</Text>
            <Text style={[{textAlign:'right'},this.fontStyle('#fff',16,'700')]}>{data.cust_id}</Text>
        </View>
        <View style={styles.whiteOverlay}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: window.width - 40,
    backgroundColor: '#ea0a63',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 20,
    position: 'relative'
  },
  columnContainer: {
      justifyContent: 'space-between',
      alignSelf: 'flex-start',
  },
  whiteOverlay : {
    width: window.width-40,
    position: 'absolute',
    borderBottomColor: '#fff',
    borderLeftColor: 'transparent',
    borderStyle: 'solid',
    borderBottomWidth: 30,
    borderLeftWidth: window.width-40,
    bottom: 0
  }
});
