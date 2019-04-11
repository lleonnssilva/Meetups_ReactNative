import { Dimensions } from "react-native";
import { colors, metrics } from "~/styles";
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
  height: 20;
  background-color: ${colors.colorPrimary};
`;
export const ListContainer = styled.FlatList`
  margin-right: ${metrics.marginMedium};
  margin-left: ${metrics.marginMax};
`;
