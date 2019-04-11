import styled from "styled-components/native";
import { colors, metrics, fonts } from "~/styles";

export const ContainerDiv = styled.View`
  background-color: ${colors.colorPrimary};
  flex: 1;
`;
export const Error = styled.Text`
  color: ${colors.colorPrincipal};
  font-size: 12;
  font-weight: bold;
  text-align: center;
  font-family: ${fonts.fontSecundary};
`;

export const Separador = styled.View`
  height: ${metrics.marginMedium};
  width: ${metrics.marginMedium};
  background-color: ${colors.colorPrimary};
`;
export const ContainerItens = styled.View`
  padding-left: ${metrics.marginMedium};
  padding-top: ${metrics.marginMedium};
  padding-right: ${metrics.marginMedium};
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 16;
  color: ${colors.colorTxtPrimary};
  padding-bottom: ${metrics.marginMin};
  font-family: ${fonts.fontSecundary};
`;
