import React from 'react';

import {
  View, Text, TouchableOpacity, StatusBar, AsyncStorage,
} from 'react-native';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Header = (props) => {
  const { navigation, title } = props;
  return (
    <View style={{ height: 55 }}>
      <StatusBar backgroundColor={styles.statusbar.backgroundColor} barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.iconLeft}>
          {title !== 'Início' && title !== 'Busca' && title !== 'Novo meetup' ? (
            <TouchableOpacity onPress={() => navigation.goBack(null)}>
              <Icon name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
          ) : null}
        </View>

        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.title}>
          {title}
        </Text>
        <View style={styles.iconRight}>
          {title === 'Perfil' ? (
            <TouchableOpacity
              onPress={() => {
                AsyncStorage.clear();
                navigation.navigate('SignIn');
              }}
            >
              {/* rocket */}
              <IconFontAwesome name="power-off" size={24} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}
            >
              <Icon name="person-outline" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
export default withNavigation(Header);
