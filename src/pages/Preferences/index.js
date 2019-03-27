import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProfileActions } from '../../store/ducks/profile';
import styles from './styles';

class Preference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      preferences: [],
      error: false,
      loading: false,
    };
  }

  handleUpdate = async () => {
    try {
      const { profileCreateRequest } = this.props;
      const { preferences } = this.state;
      this.props.profileCreateRequest({
        preferences: preferences.filter(item => item.checked === true).map(e => e.id),
      });
    } catch (_err) {
      console.tron.log('erro');
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
        username: profile.userProfile[0].username,
        preferences: profile.userProfile[0].preferences,
      });
    }
  };

  componentDidMount = () => {
    const { profileShowRequest } = this.props;
    profileShowRequest();
  };

  render() {
    const {
      username, preferences, error, loading,
    } = this.state;

    return (
      <View style={styles.container}>
        {error && <Text style={styles.labelGeral}>{error}</Text>}
        {username == null ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView>
            <View style={styles.form}>
              <Text style={styles.labelInput}>
                Olá,
                {username}
              </Text>

              <Text style={styles.textOpacity}>
                Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências
                para selecionarmos os melhores meetups pra você:
              </Text>
              <Text style={styles.labelInput}>Preferências:</Text>
              {preferences.map((item, key) => (
                //                 <CheckBox
                //                   borderStyle={{ borderWidth: 0 }}
                //                   containerStyle={{
                //                     backgroundColor: 'transparent',
                //                     margin: 0,
                //                     //padding: 5,
                //                     borderWidth: 0,
                //                   }}
                //                   color="red"
                //                   key={key}
                //                   title={item.title}
                //                   textStyle={{ color: 'white' }}
                //                   checkedIcon={(
                //                     <Image
                //                       style={{ width: 20, height: 20 }}
                //                       source={require('../../assets/checked.png')}
                //                     />
                // )}
                //                   uncheckedIcon={(
                //                     <Image
                //                       style={{ width: 20, height: 20 }}
                //                       source={require('../../assets/unchcked.png')}
                //                     />
                // )}
                //                   checked={item.checked}
                //                   onPress={() => this.onSelectPreference(key)}
                //                 />
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
                style={styles.button}
                onPress={() => {
                  this.handleUpdate();
                }}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Continuar</Text>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
});
const mapDispatchToProps = dispatch => bindActionCreators(ProfileActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preference);
