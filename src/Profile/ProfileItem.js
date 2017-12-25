import React from 'react';
import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';

const window = Dimensions.get('window');
const isEditable = ['Email','Alternate Number','Landline']

export default class ProfileItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
                <Text style={{ fontSize:14,color: '#8b8b8b',marginBottom: 3}}>{this.props.data.label}</Text>
                <Text style={{fontSize: 16}}>{this.props.data.value}</Text>
        </View>
        {
            (isEditable.indexOf(this.props.data.label) > -1) ?
                <TouchableOpacity onPress={()=>alert('Edit: '+this.props.data.label)}>
                    <Icon
                    name='pencil-square-o'
                    size={20}
                    style = {{color: '#a1c0d6'}} />
                </TouchableOpacity>   
            :null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: window.width - 40,
    flexShrink: 1,
    marginBottom: 5,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
