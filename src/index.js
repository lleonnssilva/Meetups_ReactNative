import React, { Component } from "react";
import { AsyncStorage } from "react-native";

import "./config/ReactotronConfig";
import "./config/DevToolsConfig";
import { Provider } from "react-redux";
import store from "./store";
import createNavigator from "./routes";
import { setNavigator } from "./services/navigator";

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem("@MeetupApp:token");

    this.setState({
      userChecked: true,
      userLogged: !!token
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;
    const Routes = createNavigator(userLogged);
    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    );
  }
}
