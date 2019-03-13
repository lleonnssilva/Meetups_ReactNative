import React, { Component } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  AsyncStorage
} from "react-native";
import styles from "./styles";
import api from "../../services/api";
export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSignInPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState(
        { error: "Preencha usuário e senha para continuar!" },
        () => false
      );
    } else {
      try {
        const response = await api.post("/sessions", {
          email: this.state.email,
          password: this.state.password
        });

        await AsyncStorage.setItem("@MeetupApp:token", response.data.token);
        const { navigation } = this.props;
        navigation.navigate("Dashboard");
      } catch (_err) {
        this.setState({
          error: "Houve um problema com o login, verifique suas credenciais!"
        });
      }
    }
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate("SignUp");
  };
  componentDidMount = () => {
    // AsyncStorage.clear()
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("../../assets/logo.png")}
            resizeMode="stretch"
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.labelInput}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu e-mail"
            underlineColorAndroid="transparent"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
          />
          <Text style={styles.labelInput}>Senha</Text>
          <TextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            style={styles.textInput}
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Sua senha secreta"
            underlineColorAndroid="transparent"
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleSignInPress();
            }}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.handleCreateAccountPress();
            }}
          >
            <Text style={styles.textOpacity}>Criar conta grátis</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
