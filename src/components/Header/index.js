import React from "react";

import { View, TouchableOpacity, AsyncStorage, StatusBar } from "react-native";

import { withNavigation } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from "~/styles";
import { Container, Title } from "./styles";

const Header = props => {
  const { navigation, title } = props;
  return (
    <Container>
      <StatusBar
        backgroundColor={colors.colorPrincipal}
        barStyle="light-content"
      />
      <View>
        {title !== "Início" && title !== "Busca" && title !== "Novo meetup" ? (
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <Icon name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        ) : null}
      </View>

      <Title numberOfLines={1} adjustsFontSizeToFit>
        {title}
      </Title>
      <View>
        {title === "Perfil" ? (
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.clear();
              navigation.navigate("SignIn");
            }}
          >
            {/* rocket */}
            <IconFontAwesome name="power-off" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Icon name="person-outline" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </Container>
  );
};
export default withNavigation(Header);
