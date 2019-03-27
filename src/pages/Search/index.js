import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';
import MeetupItem from '../../components/MeetupItem';
import { Creators as CreatorsMeetups } from '../../store/ducks/meetupsFilter';

class Search extends Component {
  state = {
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
      const { text } = this.state;
      const { meetupsFilterRequest } = this.props;
      await meetupsFilterRequest({
        criterio: text,
      });
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
    const { meetups, loading, error } = this.props;
    return (
      <View ref="rootView" style={styles.container}>
        {error && <Text style={styles.labelGeral}>{error}</Text>}
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
        {meetups.length > 0 && loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={meetups.meetups}
            keyExtractor={item => String(item.id)}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={this.renderListItems}
            style={styles.listContainer}
            horizontal={this.state.orientation !== 'portrait'}
          />
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  meetups: state.meetupsFilter,
  error: state.meetupsFilter.error,
  loading: state.meetupsFilter.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators(CreatorsMeetups, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
