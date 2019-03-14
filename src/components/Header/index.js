import React, { Component } from 'react';

import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

class Header extends Component {
  render() {
    const { navigation, title } = this.props;

    return (
      <View style={{ height: 55 }}>
        <StatusBar backgroundColor="#E5556E" barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.iconLeft}>
            {title != 'Início' && title != 'Busca' ? (
              <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                <Icon name="chevron-left" size={24} color="white" />
              </TouchableOpacity>
            ) : null}
          </View>

          <Text adjustsFontSizeToFit style={styles.title}>
            {title}
          </Text>
          <View style={styles.iconRight}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}
            >
              <Icon name="person-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(Header);
