import React from 'react';

import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import IpFiles from '../../config/getIp';

const MeetupItem = ({
  meetup, registered, subscriptions, navigation: { navigate },
}) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: `${IpFiles.IpFiles()}/${meetup.image}` }} />

    <View style={styles.footer}>
      <View style={styles.containerFooter}>
        <Text style={styles.title}>{meetup.title}</Text>
        <Text style={styles.subscription}>
          {subscriptions}
          {' '}
membros(s)
        </Text>
        {registered === true ? <Icon style={styles.icon} name="check" size={15} /> : null}
      </View>

      <View style={styles.containerButtom}>
        <TouchableOpacity
          onPress={() => navigate('Meetup', {
            id: meetup.id,
            title: meetup.title,
          })
          }
          style={styles.btn}
        >
          <Icon tintColor="white" name="chevron-right" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default withNavigation(MeetupItem);
