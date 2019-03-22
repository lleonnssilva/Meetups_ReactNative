import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../../store/ducks/signUp';
import styles from './styles';

class SigUp extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    username: '',
  };

  handleNameChange = (username) => {
    this.setState({ username });
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handlePasswordConfirmChange = (password_confirmation) => {
    this.setState({ password_confirmation });
  };

  handleSignUpPress = async () => {
    const { username, email, password } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest({
      username,
      email,
      password,
    });
  };

  render() {
    const {
      username, email, password, password_confirmation,
    } = this.state;
    const { error, loading, navigation } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={styles.container.backgroundColor} barStyle="light-content" />
        <View style={styles.logo}>
          <Image source={require('../../assets/logo.png')} resizeMode="stretch" />
        </View>

        <View style={styles.form}>
          <Text style={styles.labelInput}>Nome</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={styles.textInput.color}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu nome"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={this.handleNameChange}
          />
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
          <Text style={styles.labelInput}>Confirme a senha</Text>
          <TextInput
            value={password_confirmation}
            onChangeText={this.handlePasswordConfirmChange}
            style={styles.textInput}
            placeholderTextColor={styles.textInput.color}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Sua senha secreta"
            underlineColorAndroid="transparent"
            secureTextEntry
          />
          {error && <Text style={styles.textError}>Erro ao cadastrar usuário!.</Text>}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleSignUpPress();
            }}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Criar conta</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          >
            <Text style={styles.textOpacity}>Já tenho conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  error: state.signUp.error,
  loading: state.signUp.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SigUp);
