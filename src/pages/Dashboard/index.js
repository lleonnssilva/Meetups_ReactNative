import React, { Component } from 'react'

import {
  View,
  StatusBar,
  Text,
  AsyncStorage,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import ListInscritos from './components/inscritosList'
import ListProximos from './components/proximosList'
import ListRecomendados from './components/recomendosList'

export default class Meetups extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#E5556E'
    },
    headerTitle: () => (
      <View style={{ flex: 1 }}>
        <Text
          adjustsFontSizeToFit
          style={{
            textAlign: 'center',
            alignSelf: 'center',
            color: 'white'
          }}>
          Início
        </Text>
      </View>
    ),
    headerRight: (
      <TouchableOpacity
        style={{ paddingRight: 20 }}
        onPress={() => {
          AsyncStorage.clear()
          navigation.navigate('SignIn')
        }}>
        <Icon name='person-outline' size={24} color={'white'} />
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity
        style={{ paddingLeft: 20 }}
        onPress={() => {
          navigation.navigate('Profile')
        }}>
        <Icon name='chevron-left' size={24} color={'white'} />
      </TouchableOpacity>
    )
  })

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <StatusBar backgroundColor='#E5556E' barStyle='light-content' />
        <ScrollView>
          <ListInscritos props={this.props} />
          <ListProximos props={this.props} />
          <ListRecomendados props={this.props} />
        </ScrollView>
      </View>
    )
  }
}
