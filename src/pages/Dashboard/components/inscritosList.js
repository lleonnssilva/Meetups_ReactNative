import React, { Component } from 'react';

import {
  View, FlatList, ActivityIndicator, Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MeetupItem from '../../../components/MeetupItem';
import { Creators } from '../../../store/ducks/meetupsSigneds';
import styles from '../styles';

class Inscritos extends Component {
  async componentDidMount() {
    const { meetupsSignedsRequest } = this.props;
    meetupsSignedsRequest();
  }

  renderSeparator = () => <View style={styles.separador} />;

  renderListItem = ({ item }) => (
    <MeetupItem meetup={item} subscriptions={item.__meta__.subscriptions_count} />
  );

  render() {
    const { meetups } = this.props;
    return (
      <View style={styles.containerItens}>
        {!!meetups.error && <Text style={styles.error} />}
        {meetups.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View>
            <Text style={styles.title}>Inscrições</Text>
            <FlatList
              data={meetups.signeds.data}
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
const mapStateToProps = state => ({
  meetups: state.meetupsSigneds,
});
const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Inscritos);
