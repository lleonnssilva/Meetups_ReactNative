import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CreatorsLogin } from '../../store/ducks/login';
import styles from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSignInPress = async () => {
    const { email, password } = this.state;
    const { loginRequest } = this.props;

    loginRequest({
      email,
      password,
    });
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  render() {
    const { email, password } = this.state;
    const { error, loading, navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={styles.container.backgroundColor} barStyle="light-content" />
        <View style={styles.logo}>
          <Image source={require('../../assets/logo.png')} resizeMode="stretch" />
        </View>

        <View>
          <Text style={styles.labelInput}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={styles.textInput.color}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu e-mail"
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={this.handleEmailChange}
          />
          <Text style={styles.labelInput}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={this.handlePasswordChange}
            style={styles.textInput}
            placeholderTextColor={styles.textInput.color}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Sua senha secreta"
            underlineColorAndroid="transparent"
            secureTextEntry
          />
          {error && <Text style={styles.textError}>Usuário não localizado!.</Text>}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleSignInPress();
            }}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Entrar</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <Text style={styles.textOpacity}>Criar conta grátis</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators(CreatorsLogin, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
