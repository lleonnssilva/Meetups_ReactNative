import React, { Component } from 'react'

import { View, ScrollView, StatusBar } from 'react-native'

import ListInscritos from './components/inscritosList'
import ListProximos from './components/proximosList'
import ListRecomendados from './components/recomendosList'
import styles from './styles'
export default class Meetups extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ListInscritos props={this.props} />
          <ListProximos props={this.props} />
          <ListRecomendados props={this.props} />
        </ScrollView>
      </View>
    )
  }
}
