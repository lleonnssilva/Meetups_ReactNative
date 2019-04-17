import { colors, metrics, fonts } from "~/styles/index";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.colorPrimary};
  padding-left: ${metrics.marginMax};
  padding-right: ${metrics.marginMax};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Form = styled.View`
  margin-top: ${metrics.marginMax};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.colorPrincipal};
  border-radius: ${metrics.borderRadius};
  height: ${metrics.bootomHeight};
  margin-top: ${metrics.marginMax};
  justify-content: center;
  align-items: center;
  font-family: ${fonts.fontPrimary};
  color: ${colors.colorPrimary};
`;

export const ButtonText = styled.Text`
  color: ${colors.colorTxtPrimary};
  font-weight: bold;
  font-size: 16;
  font-family: ${fonts.fontSecundary};
`;

export const TextOpacity = styled.Text`
  opacity: 0.6;
  font-family: ${fonts.fontSecundary};
  font-size: 16;
  color: ${colors.colorTxtSecundary};
  text-align: left;
  padding-top: ${metrics.marginMedium};
  padding-bottom: ${metrics.marginMedium};
`;

export const LabelInput = styled.Text`
  font-family: ${fonts.fontSecundary}
  font-size: 24;
  margin-top: ${metrics.marginMin};
  color: ${colors.colorTerciary};
  text-align: left;
`;
export const LabelInputPreference = styled.Text`
  font-family: ${fonts.fontSecundary}
  font-size: 16;
  margin-top: ${metrics.marginMin};
  color: ${colors.colorTerciary};
  text-align: left;
`;

export const Logo = styled.Text`
  flex-direction: row;
  justify-content: center;
  padding-top: 90;
`;
export const Image = styled.Image`
  width: 20;
  height: 20;
`;
