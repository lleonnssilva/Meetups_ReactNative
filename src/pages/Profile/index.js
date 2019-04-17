import React, { Component } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import { CheckBox } from "react-native-elements";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ProfileActions } from "~/store/ducks/profile";
import {
  Error,
  Container,
  LabelGeral,
  TextGeral,
  ButtonSave,
  ButtonText,
  Image
} from "./styles";
import { colors, metrics, fonts } from "~/styles";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password_original: "",
      email: null,
      username: null,
      password: "",
      // password_confirmation: "",
      preferences: [],
      error: null,
      loading: false,
      msgError: ""
    };
  }

  handleNameChange = username => {
    this.setState({ username });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handlePasswordConfirmChange = password_confirmation => {
    this.setState({ password_confirmation });
  };

  handleUpdate = async () => {
    try {
      const { profileUpdateRequest } = this.props;
      const { username, password, password_original, preferences } = this.state;

      this.props.profileUpdateRequest({
        username,
        password: password === "" ? password_original : password,
        preferences: preferences
          .filter(item => item.checked === true)
          .map(e => e.id)
      });
    } catch (_err) {}
  };

  onSelectPreference = key => {
    const { preferences } = this.state;
    preferences[key].checked = !preferences[key].checked;
    this.setState({ preferences });
  };

  componentWillReceiveProps = data => {
    const { profile } = data;
    if (profile.userProfile) {
      this.setState({
        password_original: profile.userProfile[0].password,
        email: profile.userProfile[0].email,
        username: profile.userProfile[0].username,
        password: "",
        // password_confirmation: "",
        preferences: profile.userProfile[0].preferences,
        error: profile.error,
        msgError: profile.msgError,
        loading: profile.loading
      });
    }
  };

  componentDidMount = () => {
    const { profileShowRequest } = this.props;
    profileShowRequest();
  };

  render() {
    const {
      username,
      password,
      // password_confirmation,
      preferences,
      error,
      loading,
      msgError
    } = this.state;
    return (
      <Container>
        {error && <Error>{msgError}</Error>}
        {username == null ? (
          <ActivityIndicator color={colors.colorPrincipal} size="small" />
        ) : (
          <ScrollView>
            <LabelGeral>Nome</LabelGeral>
            <TextGeral
              value={username}
              onChangeText={this.handleNameChange}
              placeholderTextColor={colors.colorTxtPrimary}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu nome"
              underlineColorAndroid="transparent"
            />
            <LabelGeral>Senha</LabelGeral>
            <TextGeral
              value={password}
              onChangeText={this.handlePasswordChange}
              placeholderTextColor={colors.colorTxtPrimary}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Sua senha secreta"
              underlineColorAndroid="transparent"
              secureTextEntry
            />

            <LabelGeral>Preferências</LabelGeral>
            {preferences.map((item, key) => (
              <CheckBox
                containerStyle={{
                  backgroundColor: "transparent",
                  marginTop: 5,
                  padding: 0,
                  borderWidth: 0,
                  paddingLeft: metrics.marginMax
                }}
                textStyle={{
                  fontFamily: fonts.fontSecundary,
                  fontSize: 18,
                  color: colors.colorTxtPrimary
                }}
                key={key}
                title={item.title}
                checkedIcon={<Image source={require("~/assets/checked.png")} />}
                uncheckedIcon={
                  <Image source={require("~/assets/unchcked.png")} />
                }
                checked={item.checked}
                onPress={() => this.onSelectPreference(key)}
              />
            ))}
            <ButtonSave
              onPress={() => {
                this.handleUpdate();
              }}
            >
              {loading ? (
                <ActivityIndicator size="small" color={colors.colorSecundary} />
              ) : (
                <ButtonText>Salvar</ButtonText>
              )}
            </ButtonSave>
          </ScrollView>
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
  error: state.profile.error,
  loading: state.profile.loading
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ProfileActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
