import { colors, metrics, fonts } from "~/styles/index";
import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  height: 210;
  padding-right: 5;
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
export const Title = styled.Text`
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
export const Button = styled.TouchableOpacity`
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
