import React, { Component } from 'react';

import {
  View, FlatList, ActivityIndicator, Text,
} from 'react-native';

import { withNavigation } from 'react-navigation';
import api from '../../../services/api';
import MeetupItem from '../../../components/MeetupItem';

class Proximos extends Component {
  state = {
    meetups: [],
    loading: true,
    error: '',
    page: 1,
    lastPage: 1,
  };

  async componentDidMount() {
    this.setState({ page: 1, lastPage: 1 });
    this.loadMeetups();
  }

  loadMeetups = async () => {
    if (this.state.page <= this.state.lastPage) {
      this.setState({ refreshing: true });
      try {
        const response = await api.get(`/meetups/signed/${this.state.page}`);

        this.setState({
          meetups:
            this.state.page == 1
              ? response.data.data
              : [...this.state.meetups, ...response.data.data],
          page: response.data.page + 1,
          lastPage: response.data.lastPage,
        });
      } catch (_err) {
        this.setState({ error: 'Erro ao recuperar os meetups próximos' });
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  _renderSeparator() {
    return <View style={{ height: 10, width: 10, backgroundColor: '#1c1c1c' }} />;
  }

  renderListItem = ({ item }) => (
    <MeetupItem
      meetup={item}
      registered={false}
      subscriptions={item.__meta__.subscriptions_count}
    />
  );

  render() {
    const { loading, error, activeFilter } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#1c1c1c' }}>
        <View style={{ backgroundColor: '#1c1c1c', flex: 1 }}>
          {!!error && (
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {error}
            </Text>
          )}
          {loading ? (
            <ActivityIndicator size="large" style={{ marginTop: 30 }} />
          ) : (
            <View style={{ paddingLeft: 30, paddingRight: 30 }}>
              <Text style={{ color: 'white', paddingBottom: 10 }}>Inscritos</Text>
              <FlatList
                data={this.state.meetups}
                keyExtractor={item => String(item.id)}
                ItemSeparatorComponent={this._renderSeparator}
                renderItem={this.renderListItem}
                horizontal
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}
export default withNavigation(Proximos);
