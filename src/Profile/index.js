import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import  ProfileHeader from './ProfileHeader'
import ProfileItem from './ProfileItem'


const window = Dimensions.get('window');
const userData = [
    {'label': 'Mobile','value':'+91 9990961961'},
    {'label': 'Email','value':'ankit.dumra@tothenew.com'},
    {'label': 'Alternate Number','value':'+91 9873700701'},
    {'label': 'Landline','value':'011 2432123'},
    {'label': 'Address','value':'Tower Q, House no. 490,Emperial Society,Gurgoan.'},
    {'label': 'Pincode','value':'110017'},
    {'label': 'City','value':'Gurugram'},
]

export default class Profile extends React.Component {
  render() {
    const profileContent = userData.map((item,index)=><ProfileItem data = {item} key={index}/>)

    return (
      <View style={styles.container}>
        <ProfileHeader/>
        <View style={styles.content}>
            {profileContent}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: window.width - 40,
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 10,
  },
});
