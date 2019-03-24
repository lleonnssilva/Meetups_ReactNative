import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProfileActions } from '../../store/ducks/profile';

import styles from './styles';
import { colors } from '../../styles';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password_original: '',
      email: null,
      username: null,
      password: '',
      password_confirmation: '',
      preferences: [],
      error: null,
      loading: false,
    };
  }

  handleNameChange = (username) => {
    this.setState({ username });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handlePasswordConfirmChange = (password_confirmation) => {
    this.setState({ password_confirmation });
  };

  handleUpdate = async () => {
    try {
      const { profileUpdateRequest } = this.props;
      const {
        username, password, password_original, preferences,
      } = this.state;

      this.props.profileUpdateRequest({
        username,
        password: password === '' ? password_original : password,
        preferences: preferences.filter(item => item.checked === true).map(e => e.id),
      });
    } catch (_err) {
      this.setState({
        error: 'Houve um problema com o login, verifique suas credenciais!',
      });
    }
  };

  onSelectPreference = (key) => {
    const { preferences } = this.state;
    preferences[key].checked = !preferences[key].checked;
    this.setState({ preferences });
  };

  componentWillReceiveProps = (data) => {
    const { profile } = data;
    if (profile.userProfile !== null) {
      this.setState({
        password_original: profile.userProfile[0].password,
        email: profile.userProfile[0].email,
        username: profile.userProfile[0].username,
        password: '',
        password_confirmation: '',
        preferences: profile.userProfile[0].preferences,
        error: profile.error,
        loading: profile.loading,
      });
    }
  };

  componentDidMount = () => {
    const { profileShowRequest } = this.props;
    profileShowRequest();
  };

  render() {
    const {
      username, password, password_confirmation, preferences, error, loading,
    } = this.state;
    return (
      <View style={styles.container}>
        {error && <Text style={styles.labelGeral}>{error}</Text>}
        {username == null ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView>
            <Text style={styles.labelGeral}>Nome</Text>
            <TextInput
              value={username}
              onChangeText={this.handleNameChange}
              style={styles.textGeral}
              placeholderTextColor={styles.colorPlaceholder.color}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu nome"
              underlineColorAndroid="transparent"
            />
            <Text style={styles.labelGeral}>Senha</Text>
            <TextInput
              value={password}
              onChangeText={this.handlePasswordChange}
              style={styles.textGeral}
              placeholderTextColor={styles.colorPlaceholder.color}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Sua senha secreta"
              underlineColorAndroid="transparent"
              secureTextEntry
            />
            <Text style={styles.labelGeral}>Confirmação de senha</Text>
            <TextInput
              value={password_confirmation}
              onChangeText={this.handlePasswordConfirmChange}
              style={styles.textGeral}
              placeholderTextColor={styles.colorPlaceholder.color}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Sua senha secreta"
              underlineColorAndroid="transparent"
              secureTextEntry
            />
            <Text style={styles.labelGeral}>Preferências</Text>
            {preferences.map((item, key) => (
              <CheckBox
                containerStyle={styles.containerItems}
                textStyle={styles.textItems}
                key={key}
                title={item.title}
                checkedIcon={(
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../assets/checked.png')}
                  />
)}
                uncheckedIcon={(
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../assets/unchcked.png')}
                  />
)}
                checked={item.checked}
                onPress={() => this.onSelectPreference(key)}
              />
            ))}
            <TouchableOpacity
              style={styles.buttonSave}
              onPress={() => {
                this.handleUpdate();
              }}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Salvar</Text>
              )}
            </TouchableOpacity>
          </ScrollView>
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
  error: state.profile.error,
  loading: state.profile.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators(ProfileActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
