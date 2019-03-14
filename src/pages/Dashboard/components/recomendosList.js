import React, { Component } from 'react';

import {
  View, FlatList, ActivityIndicator, Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    const { page, meetups, lastPage } = this.state;
    if (page <= lastPage) {
      try {
        const response = await api.get(`/meetups/recommended/${page}`);

        this.setState({
          meetups: page === 1 ? response.data.data : [meetups, ...response.data.data],
          page: response.data.page + 1,
          lastPage: response.data.lastPage,
        });
      } catch (_err) {
        this.setState({ error: 'Erro ao recuperar os meetups ' });
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  renderSeparator = () => <View style={{ height: 20, width: 20, backgroundColor: '#1c1c1c' }} />;

  renderListItem = ({ item }) => (
    <MeetupItem
      meetup={item}
      registered={false}
      subscriptions={item.__meta__.subscriptions_count}
    />
  );

  render() {
    const { loading, error, meetups } = this.state;
    return (
      <View style={{ paddingLeft: 20, paddingRight: 20, paddingButtom: 20 }}>
        {!!error && (
          <Text
            style={{
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            <Icon tintColor="white" size={50} name="exclamation-triangle" color="white" />
          </Text>
        )}
        {loading ? (
          <ActivityIndicator size="large" style={{ marginTop: 20 }} />
        ) : (
          <View>
            <Text style={{ color: 'white', paddingBottom: 10 }}>Recomendados</Text>
            <FlatList
              data={meetups}
              keyExtractor={item => String(item.id)}
              ItemSeparatorComponent={this.renderSeparator}
              renderItem={this.renderListItem}
              horizontal
            />
          </View>
        )}
      </View>
    );
  }
}
export default withNavigation(Proximos);
