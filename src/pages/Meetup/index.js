import React, { Component } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  AsyncStorage
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import api from '../../services/api'

export default class Index extends Component {
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
          Detalhes Meetup
        </Text>
      </View>
    ),
    headerRight: (
      <TouchableOpacity
        style={{ paddingRight: 20 }}
        onPress={() => {
          navigation.navigate('search')
        }}>
        <Icon name='person-outline' size={24} color={'white'} />
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity style={{ paddingLeft: 20 }} onPress={this.signOut}>
        <Icon name='chevron-left' size={24} color={'white'} />
      </TouchableOpacity>
    )
  })
  state = {
    meetup: [],
    registered: true,
    subscriptions: 0
  }
  componentDidMount = async () => {
    const id = await this.props.navigation.state.params
    const { data } = await api.get(`/meetups/${id}`)
    console.tron.log(data.meetup.__meta__.subscriptions_count)
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
      console.tron.log(this.state.registered)
    } catch (_err) {
      // this.setState({ error: 'Erro ao se increver' })
    } finally {
      // this.setState({ loading: false, refreshing: false })
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#E5556E' barStyle='light-content' />
        <Image
          style={{
            width: '100%',
            height: 146
          }}
          source={{ uri: this.state.meetup.image }}
        />

        <View>
          <Text style={styles.labelInput}>{this.state.meetup.title}</Text>
          <Text style={styles.textOpacity}>
            {this.state.subscriptions} membro(s)
          </Text>
          <Text style={styles.textOpacity}>
            {this.state.meetup.description}
          </Text>
          <Text style={styles.textOpacity}>Realizado em:</Text>
          <Text style={styles.labelInput}>{this.state.meetup.place}</Text>
          {this.state.registered === true ? (
            <TouchableOpacity
              disabled
              style={styles.buttonDisable}
              onPress={this.subscriptionIn}>
              <Text style={styles.buttonText}>Já inscrito</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={this.subscriptionIn}>
              <Text style={styles.buttonText}>Inscreva-se</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }
}
