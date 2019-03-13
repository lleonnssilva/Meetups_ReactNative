import React, { Component, Fragment } from "react";

import { Button, View, Text, Image, TouchableOpacity } from "react-native";

import { CheckBox } from "react-native-elements";
import styles from "./styles";
import api from "../../services/api";
export default class Login extends Component {
  state = {
    email: "",
    password: "",
    password_confirmation: "",
    username: "",
    preferences: []
  };
  handleBack = () => {
    this.props.navigation.navigate("SignUp", (user = this.state));
  };
  handleSignInPress = async () => {
    try {
      const preferences = await this.state.preferences
        .filter(function(item) {
          return item.checked == true;
        })
        .map(e => e.id);
      const response = await api.post("/users", {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        preferences: preferences
      });

      this.props.navigation.navigate("SignIn");
    } catch (_err) {
      this.setState({
        error: "Houve um problema com o login, verifique suas credenciais!"
      });
    }
  };

  onChange = key => {
    let { preferences } = this.state;
    preferences[key].checked = !preferences[key].checked;
    this.setState({ preferences });
  };

  componentDidMount = async () => {
    const user = await this.props.navigation.state.params;

    const preferences = await api.get("/preferences");
    this.setState({
      email: user.email,
      username: user.username,
      password: user.password,
      password_confirmation: user.password,
      preferences: preferences.data
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.labelInput}>Olá, {this.state.username} </Text>

          <Text style={styles.textOpacity}>
            Parece que é seu primeiro acesso por aqui, comece escolhendo algumas
            preferências para selecionarmos os melhores meetups pra você:
          </Text>
          <Text style={styles.labelInput}>Preferências:</Text>
          {this.state.preferences.map((item, key) => {
            return (
              <CheckBox
                borderStyle={{ borderWidth: 0 }}
                containerStyle={{
                  backgroundColor: "transparent",
                  margin: 0,
                  padding: 5,
                  borderWidth: 0
                }}
                color="red"
                key={key}
                title={item.title}
                textStyle={{ color: "white" }}
                checkedIcon={
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../../assets/checked.png")}
                  />
                }
                uncheckedIcon={
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../../assets/unchcked.png")}
                  />
                }
                checked={item.checked}
                onPress={() => this.onChange(key)}
              />
            );
          })}

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleBack();
            }}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleSignInPress();
            }}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
