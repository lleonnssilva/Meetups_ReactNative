import React, { Component } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import api from '../../services/api'

export default class Index extends Component {
  state = {
    meetup: [],
    registered: true,
    subscriptions: 0
  }
  componentDidMount = async () => {
    const id = await this.props.navigation.state.params
    const { data } = await api.get(`/meetups/${id}`)

    this.setState({
      meetup: data.meetup,
      registered: data.registered,
      subscriptions: data.meetup.__meta__.subscriptions_count
    })
  }

  subscriptionIn = async () => {
    try {
      const { data } = await api.post(`/subscriptions/${this.state.meetup.id}`)
      this.setState({
        meetup: data.meetup,
        registered: data.registered,
        subscriptions: data.meetup.__meta__.subscriptions_count
      })
    } catch (_err) {
      // this.setState({ error: 'Erro ao se increver' })
    } finally {
      // this.setState({ loading: false, refreshing: false })
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.image}
            resizeMode='cover'
            source={{ uri: this.state.meetup.image }}
          />

          <View>
            <Text style={styles.labeTitle}>{this.state.meetup.title}</Text>
            <Text style={styles.labelMembers}>
              {this.state.subscriptions} membro(s)
            </Text>
            <Text style={styles.labelDesc}>
              {this.state.meetup.description}
            </Text>
            <Text style={styles.labelRealizacao}>Realizado em:</Text>
            <Text style={styles.labelLocal}>{this.state.meetup.place}</Text>
            {this.state.registered === true ? (
              <TouchableOpacity
                disabled
                style={styles.button}
                onPress={this.subscriptionIn}>
                <Text style={styles.textButton}>Já inscrito</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={this.subscriptionIn}>
                <Text style={styles.textButton}>Inscreva-se</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    )
  }
}
