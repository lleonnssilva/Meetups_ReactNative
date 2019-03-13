import { StyleSheet } from "react-native";

import { colors, metrics } from "../../styles";

import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //backgroundColor:'green',
    backgroundColor: colors.colorPrincipal,
    //borderBottomColor: colors.colorPrincipal,
    borderBottomWidth: 1,
    flexDirection: "row",
    // height: 34 + getStatusBarHeight(),
    justifyContent: "space-between",
    paddingHorizontal: metrics.marginMax
    // paddingTop: getStatusBarHeight(),
    //width: '100%',
  },

  iconLeft: {
    marginLeft: 0
    //backgroundColor: 'red'
  },
  iconRight: {
    //backgroundColor: 'yellow'
  },

  title: {
    color: colors.colorTxtPrimary,
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center"
  }
});

export default styles;
