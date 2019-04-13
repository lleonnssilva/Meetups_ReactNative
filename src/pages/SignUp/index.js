import React, { Component } from "react";

import {
  TouchableOpacity,
  Image,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators } from "~/store/ducks/profile";
import { colors, metrics, fonts } from "~/styles/index";
import {
  Container,
  Logo,
  Form,
  LabelInput,
  TextInput,
  TextError,
  TextOpacity,
  ButtonSave,
  ButtonText
} from "./styles";

class SigUp extends Component {
  state = {
    email: "",
    password: "",
    password_confirmation: "",
    username: ""
  };

  handleNameChange = username => {
    this.setState({ username });
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handlePasswordConfirmChange = password_confirmation => {
    this.setState({ password_confirmation });
  };

  handleSignUpPress = async () => {
    const { username, email, password, password_confirmation } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest({
      username,
      email,
      password,
      password_confirmation
    });
  };

  render() {
    const { username, email, password, password_confirmation } = this.state;
    const { error, loading, msgError, navigation } = this.props;

    return (
      <Container>
        <StatusBar
          backgroundColor={colors.principal}
          barStyle="light-content"
        />
        <Logo>
          <Image source={require("~/assets/logo.png")} resizeMode="stretch" />
        </Logo>

        <LabelInput>Nome</LabelInput>
        <TextInput
          placeholderTextColor={colors.colorTxtPrimary}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          value={username}
          onChangeText={this.handleNameChange}
        />
        <LabelInput>Email</LabelInput>
        <TextInput
          placeholderTextColor={colors.colorTxtPrimary}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu e-mail"
          underlineColorAndroid="transparent"
          value={email}
          onChangeText={this.handleEmailChange}
        />
        <LabelInput>Senha</LabelInput>
        <TextInput
          value={password}
          onChangeText={this.handlePasswordChange}
          placeholderTextColor={colors.colorTxtPrimary}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Sua senha secreta"
          underlineColorAndroid="transparent"
          secureTextEntry
        />
        <LabelInput>Confirme a senha</LabelInput>
        <TextInput
          value={password_confirmation}
          onChangeText={this.handlePasswordConfirmChange}
          placeholderTextColor={colors.colorTxtPrimary}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Sua senha secreta"
          underlineColorAndroid="transparent"
          secureTextEntry
        />
        {error && <TextError>{msgError}</TextError>}
        <ButtonSave
          onPress={() => {
            this.handleSignUpPress();
          }}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <ButtonText>Criar conta</ButtonText>
          )}
        </ButtonSave>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <TextOpacity>Já tenho conta</TextOpacity>
        </TouchableOpacity>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  error: state.profile.error,
  loading: state.profile.loading,
  msgError: state.profile.msgError
});
const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigUp);
