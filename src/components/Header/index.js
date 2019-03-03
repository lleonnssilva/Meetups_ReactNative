import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  AsyncStorage
} from 'react-native'

import { withNavigation } from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

const Header = () => {
  return (
    <View>
      <View />
      <Text>Meu header</Text>
      <TouchableOpacity onPress={this.signOut}>
        <Icon name='person-outline' size={24} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

export default Header
