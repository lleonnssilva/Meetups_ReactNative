import React, { Component } from 'react';
import {
  View, TextInput, FlatList, Dimensions, ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import api from '../../services/api';
import MeetupItem from '../../components/ItemSearch/index';

export default class Search extends Component {
  state = {
    meetups: [],
    text: '',
    orientation: '',
  };

  getOrientation = () => {
    if (this.refs.rootView) {
      if (Dimensions.get('window').width < Dimensions.get('window').height) {
        this.setState({ orientation: 'portrait' });
      } else {
        this.setState({ orientation: 'landscape' });
      }
    }
  };

  search = async () => {
    try {
      const response = await api.get(`/meetups/filter/${this.state.text}`);

      this.setState({ meetups: response.data.rows });
      if (this.state.meetups.length <= 0) {
        ToastAndroid.showWithGravity(
          'Nenhum registro localizado!!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    } catch (_err) {
      ToastAndroid.showWithGravity(String(_err), ToastAndroid.SHORT, ToastAndroid.CENTER);
    } finally {
      // this.setState({ loading: false, refreshing: false })
    }
  };

  renderListItems = ({ item }) => (
    <MeetupItem
      props={this.props}
      meetup={item}
      registered={item.registered != null}
      subscriptions={item.subscriptions == null ? 0 : item.subscriptions}
    />
  );

  componentDidMount() {
    this.getOrientation();

    Dimensions.addEventListener('change', () => {
      this.getOrientation();
    });
  }

  renderSeparator = () => <View style={{ height: 20, width: 20, backgroundColor: '#1c1c1c' }} />;

  render() {
    return (
      <View ref="rootView" style={styles.container}>
        <View style={styles.searchSection}>
          <Icon style={styles.searchIcon} name="search" size={20} color="#8e8e93" />

          <TextInput
            style={styles.input}
            placeholder="Buscar Meetups"
            placeholderTextColor="#8e8e93"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            onEndEditing={this.search}
            maxLength={40}
          />
        </View>
        <FlatList
          data={this.state.meetups}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderListItems}
          style={styles.listContainer}
          horizontal={this.state.orientation !== 'portrait'}
        />
      </View>
    );
  }
}
