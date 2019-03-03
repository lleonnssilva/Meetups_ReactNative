import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Text,
  AsyncStorage,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import api from '../../services/api'
import MeetupItem from '../../components/MeetupItem/index'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

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
          navigation.navigate('Inicio')
        }}>
        <Icon name='chevron-left' size={24} color={'white'} />
      </TouchableOpacity>
    )
  })
  state = {
    activeFilter: 'all',
    meetupsInscritos: [],
    meetupsRecomendados: [],
    meetupsProximos: [],
    loading: true,
    error: '',
    refreshing: false,
    token: null
  }

  async componentDidMount () {
    this.loadMeetupsProximos()
    this.loadMeetupsInscritos()
    this.loadMeetupsRecomendados()
  }

  loadMeetupsInscritos = async () => {
    this.setState({ refreshing: true })

    const { navigation } = this.props
    const { activeFilter } = this.state

    try {
      const { data } = await api.get('/meetups/signed')

      this.setState({ meetupsInscritos: data })
    } catch (_err) {
      this.setState({ error: 'Erro ao recuperar os meetups inscritos' })
    } finally {
      this.setState({ loading: false, refreshing: false })
    }
  }

  loadMeetupsRecomendados = async () => {
    this.setState({ refreshing: true })

    const { navigation } = this.props
    const { activeFilter } = this.state

    try {
      const { data } = await api.get('/meetups/recommended')

      this.setState({ meetupsRecomendados: data })
    } catch (_err) {
      this.setState({ error: 'Erro ao recuperar os meetups recomendados' })
    } finally {
      this.setState({ loading: false, refreshing: false })
    }
  }

  loadMeetupsProximos = async () => {
    this.setState({ refreshing: true })

    const { navigation } = this.props
    const { activeFilter } = this.state

    try {
      const { data } = await api.get('/meetups/unsigned')
      console.tron.log(data)
      this.setState({ meetupsProximos: data })
    } catch (_err) {
      this.setState({ error: 'Erro ao recuperar os meetups próximos' })
    } finally {
      this.setState({ loading: false, refreshing: false })
    }
  }
  _renderSeparator () {
    return <View style={{ width: 20, backgroundColor: 'black' }} />
  }
  renderListItemProximos = ({ item }) => (
    <MeetupItem
      props={this.props}
      meetup={item}
      registered={false}
      subscriptions={item.__meta__.subscriptions_count}
    />
  )
  renderListItemRecomendados = ({ item }) => (
    <MeetupItem
      props={this.props}
      meetup={item}
      registered={false}
      subscriptions={item.__meta__.subscriptions_count}
    />
  )
  renderListItemInscritos = ({ item }) => (
    <MeetupItem
      props={this.props}
      meetup={item}
      registered
      subscriptions={item.__meta__.subscriptions_count}
    />
  )

  render () {
    const { loading, error, activeFilter } = this.state
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <ScrollView>
          <StatusBar backgroundColor='#E5556E' barStyle='light-content' />

          <View style={styles.container}>
            {!!error && <Text style={styles.error}>{error}</Text>}
            {loading ? (
              <ActivityIndicator size='large' style={styles.loading} />
            ) : (
              <View style={{ padding: 0 }}>
                <Text style={{ color: 'white', padding: 20 }}>Inscrições</Text>
                <FlatList
                  data={this.state.meetupsInscritos}
                  keyExtractor={(item) => String(item.id)}
                  ItemSeparatorComponent={this._renderSeparator}
                  renderItem={this.renderListItemInscritos}
                  style={styles.listContainer}
                  horizontal
                />
                <Text style={{ color: 'white', padding: 20 }}>
                  Próximos meetups
                </Text>
                <FlatList
                  data={this.state.meetupsProximos}
                  keyExtractor={(item) => String(item.id)}
                  renderItem={this.renderListItemProximos}
                  ItemSeparatorComponent={this._renderSeparator}
                  style={styles.listContainer}
                  horizontal
                />
                <Text style={{ color: 'white', padding: 20 }}>Recomnados</Text>
                <FlatList
                  data={this.state.meetupsRecomendados}
                  keyExtractor={(item) => String(item.id)}
                  renderItem={this.renderListItemRecomendados}
                  ItemSeparatorComponent={this._renderSeparator}
                  style={styles.listContainer}
                  horizontal
                />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    )
  }
}
