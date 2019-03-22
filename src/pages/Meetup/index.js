import React, { Component } from 'react';

import {
  View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';
import { UrlFiles } from '../../config/Url';
import { Creators as MeetupActions } from '../../store/ducks/meetup';

class Meetup extends Component {
  componentDidMount = async () => {
    const id = await this.props.navigation.getParam('id');
    const { meetupShowRequest } = this.props;
    await meetupShowRequest({ id });
  };

  subscriptionIn = async () => {
    try {
      const { meetupSubscriptionRequest } = this.props;
      meetupSubscriptionRequest({
        id: this.props.meetup.meetup.id,
      });
    } catch (_err) {
      // this.setState({ error: 'Erro ao se increver' });
    } finally {
      // this.setState({ loading: false });
    }
  };

  render() {
    const { meetup, error, loading } = this.props;
    return (
      <View style={styles.container}>
        {error && <Text style={styles.labelGeral}>{error}</Text>}
        {meetup.meetup == null ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView>
            <Image
              style={styles.image}
              resizeMode="stretch"
              source={{ uri: `${UrlFiles()}/${meetup.meetup.image}` }}
            />

            <View>
              <Text style={styles.labeTitle}>{meetup.meetup.title}</Text>
              <Text style={styles.labelMembers}>
                {meetup.meetup.__meta__.subscriptions_count}
                {' '}
membro(s)
              </Text>
              <Text style={styles.labelDesc}>{meetup.meetup.description}</Text>
              <Text style={styles.labelRealizacao}>Realizado em:</Text>
              <Text style={styles.labelLocal}>{meetup.meetup.place}</Text>

              {meetup.registered === true ? (
                <TouchableOpacity disabled style={[styles.button, { backgroundColor: 'gray' }]}>
                  <Text style={styles.textButton}>Já inscrito</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.button} onPress={this.subscriptionIn}>
                  {loading ? (
                    <ActivityIndicator size="small" color="black" />
                  ) : (
                    <Text style={styles.textButton}>Inscreva-se</Text>
                  )}
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  meetup: state.meetup,
  error: state.meetup.error,
  loading: state.meetup.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators(MeetupActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetup);
