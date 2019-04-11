import { colors, metrics, fonts } from "~/styles";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.colorPrimary};
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
`;
export const ButtonSave = styled.TouchableOpacity`
  flex: 1;
  background-color: ${colors.colorPrincipal};
  border-radius: ${metrics.borderRadius};
  height: ${metrics.bootomHeight};
  justify-content: center;
  align-items: center;
  margin-left: ${metrics.marginMax};
  margin-right: ${metrics.marginMax};
  margin-top: ${metrics.marginMax};
  margin-bottom: ${metrics.marginMax};
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.fontPrimary};
  color: ${colors.colorTxtPrimary};
  font-weight: bold;
  font-size: 16;
`;

export const LabelGeral = styled.Text`
  font-size: 16;
  color: ${colors.colorTxtPrimary};
  font-family: ${fonts.fontSecundary};
  padding-top: ${metrics.marginMax};
  padding-left: ${metrics.marginMax};
`;

export const TextGeral = styled.TextInput`
  font-family: ${fonts.fontPrimary};
  padding-top: ${metrics.marginMedium};
  opacity: 0.5;
  font-size: 20;
  color: ${colors.colorTxtPrimary};
  padding-left: ${metrics.marginMax};
`;

export const Image = styled.Image`
  width: 20;
  height: 20;
`;
