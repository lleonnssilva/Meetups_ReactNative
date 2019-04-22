import { colors, metrics, fonts } from "~/styles";
import styled from "styled-components/native";
export const Container = styled.View`
  align-items: center;
  background-color: ${colors.colorPrincipal};
  border-bottom-width: 0;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${metrics.marginMax};
  height: 50;
`;

export const Title = styled.Text`
  color: ${colors.colorTxtPrimary};
  font-size: 18;
  font-family: ${fonts.fontSecundary};
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;
