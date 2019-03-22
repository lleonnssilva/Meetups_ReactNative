import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, ActivityIndicator,
} from 'react-native';

import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProfileActions } from '../../store/ducks/profile';

import styles from './styles';

class Temes extends Component {
  state = {
    email: null,
    password: null,
    username: null,
    preferences: [],
  };

  handleSignInPress = async () => {
    const {
      preferences, email, username, password,
    } = this.state;
    try {
      const { profileUpdateRequest, navigation } = this.props;
      profileUpdateRequest({
        email,
        username,
        password,
        preferences: preferences.filter(item => item.checked === true).map(e => e.id),
      });
      navigation.navigate('Dashboard');
    } catch (_err) {
      console.tron.log(_err);
    }
  };

  onChange = (key) => {
    const { profile } = this.props;
    profile.preferences[key].checked = !profile.preferences[key].checked;
    this.setState({ preferences: profile.preferences });
  };

  componentDidMount = async () => {
    const { preferencesRequest } = this.props;
    preferencesRequest();

    const { profile } = this.props;
    const { username, password, email } = await this.props.navigation.state.params;
    this.setState({
      username,
      password,
      email,
      preferences: profile.preferences,
    });
  };

  render() {
    const {
      username, preferences, error, loading,
    } = this.state;
    const { profile } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.labelInput}>
            Olá,
            {username}
          </Text>

          <Text style={styles.textOpacity}>
            Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
            selecionarmos os melhores meetups pra você:
          </Text>
          <Text style={styles.labelInput}>Preferências:</Text>
          {profile.preferences.map((item, key) => (
            <CheckBox
              borderStyle={{ borderWidth: 0 }}
              containerStyle={{
                backgroundColor: 'transparent',
                margin: 0,
                padding: 5,
                borderWidth: 0,
              }}
              color="red"
              key={key}
              title={item.title}
              textStyle={{ color: 'white' }}
              checkedIcon={(
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require('../../assets/checked.png')}
                />
)}
              uncheckedIcon={(
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require('../../assets/unchcked.png')}
                />
)}
              checked={item.checked}
              onPress={() => this.onChange(key)}
            />
          ))}

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleSignInPress();
            }}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Continuar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  preferences: state.preferences,
});
const mapDispatchToProps = dispatch => bindActionCreators(ProfileActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Temes);
