import React, { Component } from 'react'

import { View, StatusBar, FlatList, ActivityIndicator, Text } from 'react-native'

import api from '../../../services/api'
import MeetupItem from '../../../components/MeetupItem'

// import styles from './../styles'

export default class Meetups extends Component {
  state = {
    meetups: [],
    loading: true,
    error: '',
    refreshing: false,
    page: 1,
    lastPage: 1
  }

  async componentDidMount () {
    this.setState({ page: 1, lastPage: 1 })
    this.loadMeetups()
  }

  loadMeetups = async () => {
    if (this.state.page <= this.state.lastPage) {
      this.setState({ refreshing: true })
      try {
        const response = await api.get(`/meetups/signed/${this.state.page}`)
        // console.tron.log(response)
        this.setState({
          meetups:
            this.state.page == 1
              ? response.data.data
              : [...this.state.meetups, ...response.data.data],
          page: response.data.page + 1,
          lastPage: response.data.lastPage
        })
        // console.tron.log(this.state)
      } catch (_err) {
        this.setState({ error: 'Erro ao recuperar os meetups próximos' })
      } finally {
        this.setState({ loading: false, refreshing: false })
      }
    }
  }
  _renderSeparator () {
    return <View style={{ width: 20, backgroundColor: '#1c1c1c' }} />
  }
  renderListItem = ({ item }) => (
    <MeetupItem
      props={this.props}
      meetup={item}
      registered={false}
      subscriptions={item.__meta__.subscriptions_count}
    />
  )

  render () {
    const { loading, error, activeFilter } = this.state
    return (
      <View style={{ flex: 1, backgroundColor: '#1c1c1c' }}>
        <StatusBar backgroundColor='#E5556E' barStyle='light-content' />

        <View style={{ backgroundColor: '#1c1c1c', flex: 1 }}>
          {!!error && (
            <Text
              style={{
                color: 'black', //, colors.danger,
                fontSize: 12,
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
              {error}
            </Text>
          )}
          {loading ? (
            <ActivityIndicator size='large' style={{ marginTop: 30 }} />
          ) : (
            <View style={{ padding: 0 }}>
              <Text style={{ color: 'white', padding: 20 }}>Inscrições</Text>
              <FlatList
                data={this.state.meetups}
                keyExtractor={(item) => String(item.id)}
                ItemSeparatorComponent={this._renderSeparator}
                renderItem={this.renderListItem}
                style={{ paddingHorizontal: 20 }}
                horizontal
              />
            </View>
          )}
        </View>
      </View>
    )
  }
}
