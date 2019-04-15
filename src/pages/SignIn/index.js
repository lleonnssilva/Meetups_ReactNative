import React, { Component } from "react";

import {
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CreatorsLogin } from "~/store/ducks/profile";
import { colors } from "~/styles";
import {
  Container,
  Logo,
  TextInput,
  TextError,
  ButtonText,
  ButtonLogin,
  LabelInput,
  TextOpacity
} from "./styles";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSignInPress = async () => {
    const { email, password } = this.state;
    const { loginRequest } = this.props;

    loginRequest({
      email,
      password
    });
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  render() {
    const { email, password } = this.state;
    const { error, loading, msgError, navigation } = this.props;

    return (
      <Container>
        <View>
          <ScrollView>
            <Logo>
              <Image
                source={require("~/assets/logo.png")}
                resizeMode="stretch"
              />
            </Logo>

            <View>
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
              {error && <TextError>{msgError}</TextError>}
              <ButtonLogin
                onPress={() => {
                  this.handleSignInPress();
                }}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <ButtonText>Entrar</ButtonText>
                )}
              </ButtonLogin>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <TextOpacity>Criar conta grátis</TextOpacity>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.profile.error,
  loading: state.profile.loading,
  msgError: state.profile.msgError
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CreatorsLogin, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
