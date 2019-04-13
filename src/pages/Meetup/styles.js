import { colors, metrics, fonts } from "~/styles";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.colorPrimary};
`;

export const Image = styled.Image`
  width: 100%;
  height: 212;
`;

export const LabeTitle = styled.Text`
  margin-top: ${metrics.marginMax};
  margin-left: ${metrics.marginMax};
  font-family: ${fonts.fontSecundary};
  font-size: 16;
  color: ${colors.colorTxtPrimary};
  margin-right: ${metrics.marginMax};
`;

export const LabelMembers = styled.Text`
  font-family: ${fonts.fontPrimary};
  font-size: 14;
  color: ${colors.colorTxtSecundary};
  padding-top: ${metrics.marginMin};
  padding-left: ${metrics.marginMax};
`;

export const LabelDesc = styled.Text`
  opacity: 0.8;
  font-family: ${fonts.fontPrimary};
  font-size: 16;
  color: ${colors.colorTxtPrimary};
  line-height: 28;
  margin-top: ${metrics.marginMedium};
  margin-left: ${metrics.marginMax};
  margin-right: ${metrics.marginMax};
`;

export const LabelRealizacao = styled.Text`
  font-family: ${fonts.fontPrimary};
  font-size: 14;
  color: ${colors.colorTxtSecundary};
  margin-top: ${metrics.marginMax};
  margin-left: ${metrics.marginMax};
`;

export const LabelLocal = styled.Text`
  opacity: 0.8;
  font-family: ${fonts.fontPrimary};
  font-size: 14;
  color: ${colors.colorTxtPrimary};
  line-height: 24;
  margin-top: ${metrics.marginMin};
  margin-left: ${metrics.marginMax};
  margin-right: ${metrics.marginMax};
`;
export const LabelData = styled.Text`
  opacity: 0.8;
  font-family: ${fonts.fontPrimary};
  font-size: 14;
  color: ${colors.colorTxtPrimary};
  line-height: 24;
  margin-top: ${metrics.marginMin};
  margin-left: ${metrics.marginMax};
  margin-right: ${metrics.marginMax};
`;
export const ButtonSave = styled.TouchableOpacity`
  background-color: ${colors.colorPrincipal};
  border-radius: ${metrics.borderRadius};
  height: 44;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.fontPrimary};
  color: ${colors.colorTxtSecundary};
  margin-top: ${metrics.marginMax};
  margin-left: ${metrics.marginMax};
  margin-right: ${metrics.marginMax};
  margin-bottom: ${metrics.marginMax};
`;
export const ButtonInscrito = styled.View`
  background-color: ${colors.colorSecundary};
  border-radius: ${metrics.borderRadius};
  height: 44;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.fontPrimary};
  color: ${colors.colorTxtSecundary};
  margin-top: ${metrics.marginMax};
  margin-left: ${metrics.marginMax};
  margin-right: ${metrics.marginMax};
  margin-bottom: ${metrics.marginMax};
`;
export const TextButton = styled.Text`
  font-family: ${fonts.fontSecundary};
  font-size: 16;
  color: ${colors.colorTxtPrimary};
`;
