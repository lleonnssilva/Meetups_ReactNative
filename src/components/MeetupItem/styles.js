import { StyleSheet } from "react-native";

import { colors, metrics } from "../../styles/index";

const styles = StyleSheet.create({
  // author: {
  //   color: colors.regular,
  //   fontSize: 14
  // },

  // avatar: {
  //   borderRadius: 25,
  //   height: 50,
  //   width: 50
  // },

  container: {
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 30,
    padding: 30
  },

  icon: {
    fontFamily: "material",
    fontSize: 20,
    textAlign: "left",
    color: "#ffffff"
  },

  infoContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 30
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3
  }
});

export default styles;
