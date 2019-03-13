import React from "react";

import { View, ScrollView } from "react-native";

import ListInscritos from "./components/inscritosList";
import ListProximos from "./components/proximosList";
import ListRecomendados from "./components/recomendosList";
import { withNavigation } from "react-navigation";
import styles from "./styles";

const meetups = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ListInscritos />
        <ListProximos />
        <ListRecomendados />
      </ScrollView>
    </View>
  );
};

export default withNavigation(meetups);
