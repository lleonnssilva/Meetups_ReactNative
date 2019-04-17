import { Dimensions } from "react-native";
import { colors, metrics, fonts } from "~/styles";
import styled from "styled-components/native";
const { width } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.colorPrimary};
`;
export const SearchSection = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.colorSecundary};
  height: 40;
  border-radius: ${metrics.marginMin};
  margin-left: ${metrics.marginMax};
  margin-right: ${metrics.marginMax};
  margin-top: ${metrics.marginMin};
  margin-bottom: ${metrics.marginMin};
`;

export const InputText = styled.TextInput`
  background-color: ${colors.colorSecundary};
  color: #8e8e93;
  width: ${width - metrics.marginMax * 4};
`;
export const Separator = styled.View`
  height: 10;
  width: 10;
  background-color: ${colors.colorPrimary};
`;
export const ListContainer = styled.FlatList`
  margin-right: ${metrics.marginMedium};
  margin-left: ${metrics.marginMax};
`;
export const ContainerItem = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 210;
  padding-left: ${metrics.marginMedium};
`;
export const Image = styled.Image`
  width: 315;
  height: 146;
  border-top-right-radius: 10;
  border-top-left-radius: 10;
`;
export const ContainerFooter = styled.View`
  flex-direction: column;
  width: 75%;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: ${metrics.marginMedium};
`;
export const Footer = styled.View`
  flex: 1;
  background-color: ${colors.colorTerciary};
  flex-direction: row;
  width: 315;
  justify-content: center;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
`;
export const TitleItem = styled.Text`
  font-family: ${fonts.fontSecundary};
  font-size: 16;
  color: ${colors.colorPrimary};
  text-align: left;
  padding-top: ${metrics.marginMin};
`;
export const Subscription = styled.Text`
  font-family: ${fonts.fontPrimary};
  font-size: 14;
  color: ${colors.colorTxtSecundary};
  text-align: left;
`;
export const ContainerButtom = styled.View`
  width: 25%;
  justify-content: center;
  padding-top: ${metrics.marginMedium};
  padding-left: ${metrics.marginMedium};
  padding-right: ${metrics.marginMedium};
  padding-bottom: ${metrics.marginMedium};
`;
export const ButtonDetail = styled.TouchableOpacity`
  background-color: ${colors.colorPrincipal};
  align-items: center;
  justify-content: center;
  width: 40;
  height: 40;
  border-radius: 40;
`;
export const Icon = styled.View`
  position: absolute;
  padding-top: ${metrics.marginMax};
  padding-left: 121;
`;
export const TextError = styled.Text`
  opacity: 0.6;
  font-family: ${fonts.fontSecundary};
  font-size: 12;
  color: ${colors.colorPrincipal};
  text-align: center;
`;
