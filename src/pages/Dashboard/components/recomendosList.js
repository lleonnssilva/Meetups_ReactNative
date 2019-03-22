import React, { Component } from 'react';

import {
  View, FlatList, ActivityIndicator, Text,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MeetupItem from '../../../components/MeetupItem';
import { Creators } from '../../../store/ducks/meetupsRecommendeds';
import styles from '../styles';

class Recomendados extends Component {
  renderSeparator = () => <View style={{ height: 20, width: 20, backgroundColor: '#1c1c1c' }} />;

  renderListItem = ({ item }) => (
    <MeetupItem meetup={item} subscriptions={item.__meta__.subscriptions_count} />
  );

  async componentDidMount() {
    const { meetupsRecommendedsRequest } = this.props;
    meetupsRecommendedsRequest();
  }

  render() {
    const { meetups } = this.props;

    return (
      <View style={styles.containerItens}>
        {!!meetups.error && <Text style={styles.error} />}
        {meetups.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View>
            <Text style={styles.title}>Recomendados</Text>
            <FlatList
              data={meetups.recommendeds.data}
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
  meetups: state.meetupsRecommendeds,
});
const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recomendados);
