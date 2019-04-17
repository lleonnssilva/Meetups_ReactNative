import { colors, metrics, fonts } from "~/styles";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.colorPrimary};
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  padding-left: ${metrics.marginMax};
  padding-right: ${metrics.marginMax};
`;

export const TextInput = styled.TextInput`
  opacity: 0.5;
  font-family: ${fonts.fontSecundary};
  font-size: 20;
  color: ${colors.colorTxtPrimary};
  text-align: left;
  padding-top: ${metrics.marginMin};
`;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${colors.colorPrincipal};
  border-radius: ${metrics.borderRadius};
  height: ${metrics.bootomHeight};
  justify-content: center;
  align-items: center;
  margin-top: ${metrics.marginMedium};
  margin-bottom: ${metrics.marginMedium};
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
  color: ${colors.colorTxtPrimary};
  text-align: center;
`;
export const TextError = styled.Text`
  opacity: 0.6;
  font-family: ${fonts.fontSecundary};
  font-size: 12;
  color: ${colors.colorPrincipal};
  text-align: center;
`;
export const LabelInput = styled.Text`
  font-family: ${fonts.fontPrimary};
  font-size: 22;
  margin-top: ${metrics.marginMin};
  color: ${colors.colorTxtPrimary};
  text-align: left;
`;
export const Logo = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-bottom: ${metrics.marginMax};
`;
