import React, { Component } from 'react';

import {
  View, FlatList, ActivityIndicator, Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MeetupItem from '../../../components/MeetupItem';
import { Creators } from '../../../store/ducks/meetupsUnsigneds';
import styles from '../styles';

class Proximos extends Component {
  async componentDidMount() {
    const { meetupsUnsignedsRequest } = this.props;
    meetupsUnsignedsRequest();
  }

  renderSeparator = () => <View style={styles.separador} />;

  renderListItem = ({ item }) => (
    <MeetupItem meetup={item} />
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
            <Text style={styles.title}>Próximos</Text>
            <FlatList
              data={meetups.unsigneds.data}
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
  meetups: state.meetupsUnsigneds,
});
const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Proximos);
