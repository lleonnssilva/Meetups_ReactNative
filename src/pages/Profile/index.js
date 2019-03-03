import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
// import styles from './styles';

const Profile = () => (
  <View>
    <Text>Profile</Text>
  </View>
)
Profile.navigationOptions = ({ navigation }) => ({
  headerTitle: () => (
    <View style={{ flex: 1 }}>
      <Text
        adjustsFontSizeToFit
        style={{
          textAlign: 'center',
          alignSelf: 'center',
          color: 'white',
          borderBottomColor: 'transparent',
          borderWidth: 0,
          elevation: 0,
          shadowOpacity: 0
        }}>
        Details
      </Text>
    </View>
  ),
  headerRight: (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('search')
      }}>
      <Icon name='person-outline' size={24} />
    </TouchableOpacity>
  ),
  headerLeft: (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NewMeetup')
      }}>
      <Icon name='chevron-left' size={24} />
    </TouchableOpacity>
  )
})
export default Profile
