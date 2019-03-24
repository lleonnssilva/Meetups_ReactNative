import React from 'react';

import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { UrlFiles } from '../../config/Url';

const MeetupItem = (props) => {
  const {
    meetup,
    navigation: { navigate },
  } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: `${UrlFiles()}/${meetup.image}` }} />

      <View style={styles.footer}>
        <View style={styles.containerFooter}>
          <Text numberOfLines={1} style={styles.title}>
            {meetup.title}
          </Text>
          <Text style={styles.subscription}>
            {meetup.__meta__.subscriptions_count}
            {' '}
membros(s)
          </Text>
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
};

export default withNavigation(MeetupItem);
