import { colors, metrics, fonts } from "~/styles";
import styled from "styled-components/native";
// padding-top: ${metrics.marginMax};
export const Container = styled.View`
  flex: 1;
  background-color: ${colors.colorPrimary};

  padding-right: ${metrics.marginMax};
  padding-bottom: ${metrics.marginMax};
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
`;
export const TextError = styled.Text`
  opacity: 0.5;
  font-family: ${fonts.fontSecundary};
  font-size: 12;
  color: ${colors.colorPrincipal};
  text-align: center;
  padding-bottom: ${metrics.marginMedium};
`;
export const Form = styled.View`
  margin-top: ${metrics.marginMax};
`;
export const TextInput = styled.TextInput`
  opacity: 0.5;
  font-family: ${fonts.fontSecundary};
  font-size: 20;
  color: ${colors.colorTxtPrimary};
  padding-left: ${metrics.marginMax};
  padding-top: ${metrics.marginMin};
  text-align: left;
`;
export const ButtonSave = styled.TouchableOpacity`
  background-color: ${colors.colorPrincipal};
  border-radius: ${metrics.borderRadius};
  height: ${metrics.bootomHeight};
  margin-top: ${metrics.marginMax};
  justify-content: center;
  align-items: center;
  font-family: ${fonts.fontPrimary};
  color: ${colors.colorTxtPrimary};
  margin-left: ${metrics.marginMax};
`;
export const ButtonText = styled.Text`
  color: ${colors.colorTxtPrimary};
  font-weight: bold;
  text-align: center;
  font-size: 16;
  font-family: ${fonts.fontPrimary};
`;
export const TextOpacity = styled.Text`
  opacity: 0.6;
  font-family: ${fonts.fontPrimary};
  font-size: 16;
  color: ${colors.colorTxtPrimary};
  text-align: center;
  padding-top: ${metrics.marginMedium};
`;
export const LabelInput = styled.Text`
  font-family: ${fonts.fontPrimary};
  font-size: 22;
  margin-top: ${metrics.marginMax};
  padding-left: ${metrics.marginMax};
  color: ${colors.colorTxtPrimary};
  text-align: left;
  font-weight: bold;
`;
export const Logo = styled.View`
  flex-direction: row;
  justify-content: center;
`;
