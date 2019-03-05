import React, { Component } from 'react'

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import api from '../../services/api'
import MeetupItem from '../../components/MeetupItem/index'

export default class Search extends Component {
  state = {
    meetups: [],
    text: ''
  }
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
          Busca
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
      <TouchableOpacity style={{ paddingLeft: 20 }} onPress={this.signOut}>
        <Icon name='chevron-left' size={24} color={'white'} />
      </TouchableOpacity>
    )
  })

  search = async () => {
    try {
      const response = await api.get(`/meetups/filter/${this.state.text}`)
      // console.tron.log(rows)
      this.setState({ meetups: response.data.rows })
    } catch (_err) {
      // this.setState({ error: 'Erro ao recuperar os meetups recomendados' })
    } finally {
      // this.setState({ loading: false, refreshing: false })
    }
  }
  renderListItems = ({ item }) => (
    <MeetupItem
      props={this.props}
      meetup={item}
      registered={item.registered != null}
      subscriptions={item.subscriptions == null ? 0 : item.subscriptions}
    />
  )

  renderSeparator = () => (
    <View style={{ height: 20, backgroundColor: 'black' }} />
  )

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#E5556E' barStyle='light-content' />
        <TextInput
          style={{ color: 'white', backgroundColor: 'gray' }}
          placeholder='Buscar Meetups'
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          onEndEditing={this.search}
        />

        <FlatList
          data={this.state.meetups}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderListItems}
          style={styles.listContainer}
        />
      </View>
    )
  }
}
