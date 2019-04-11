import styled from "styled-components/native";
import { colors, metrics, fonts } from "~/styles";

export const Container = styled.View`
  padding-top: ${metrics.marginMax};
  flex: 1;
  background-color: ${colors.colorPrimary};
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
`;

export const ButtonSave = styled.TouchableOpacity`
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
  color: ${colors.colorTxtPrimary};
  font-weight: bold;
  font-size: 16;
  font-family: ${fonts.fontPrimary};
`;

export const LabelGeral = styled.Text`
  font-family: ${fonts.fontSecundary};
  font-size: 16;
  color: ${colors.colorTxtPrimary};

  padding-left: ${metrics.marginMax};
  padding-right: ${metrics.marginMax};
`;

export const TextGeral = styled.TextInput`
  opacity: 0.5;
  font-family: ${fonts.fontPrimary};
  font-size: 20;
  color: ${colors.colorTxtPrimary};

  padding-left: ${metrics.marginMax};
  padding-right: ${metrics.marginMax};
`;

export const ButtonImage = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
`;
export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5;
  border-width: 1;
`;
export const ContainerImage = styled.View`
  background-color: transparent;
  height: 164;
  align-items: center;
  justify-content: center;
  border-color: gray;
  border-radius: 5;
  border-width: 1;
  border-style: dashed;
  margin-left: ${metrics.marginMax};
  margin-right: ${metrics.marginMax};
`;
