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

  renderSeparator = () => <View style={styles.separator} />

  render () {
    return (
      <View style={styles.container}>
        {/* <StatusBar backgroundColor='#E5556E' barStyle='light-content' /> */}

        <View style={styles.searchSection}>
          <Icon
            style={styles.searchIcon}
            name='search'
            size={20}
            color='#8e8e93'
          />

          <TextInput
            style={styles.input}
            placeholder='Buscar Meetups'
            placeholderTextColor='#8e8e93'
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            onEndEditing={this.search}
            maxLength={40}
          />
        </View>
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
