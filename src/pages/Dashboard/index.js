import React from 'react';

import { View, ScrollView } from 'react-native';

import ListInscritos from './components/inscritosList';
import ListProximos from './components/proximosList';
import ListRecomendados from './components/recomendosList';

import styles from './styles';

const meetups = () => (
  <View style={styles.container}>
    <ScrollView>
      <ListInscritos />
      <ListProximos />
      <ListRecomendados />
    </ScrollView>
  </View>
);

export default meetups;
