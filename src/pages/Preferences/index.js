import React, { Component } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import { CheckBox } from "react-native-elements";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ProfileActions } from "~/store/ducks/profile";
import { colors, fonts } from "~/styles";
import {
  Container,
  LabelGeral,
  Form,
  LabelInput,
  TextOpacity,
  Image,
  Button,
  ButtonText
} from "./styles";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      preferences: [],
      error: false,
      loading: false
    };
  }

  handleUpdate = async () => {
    try {
      const { profileCreateRequest } = this.props;
      const { preferences } = this.state;
      this.props.profileCreateRequest({
        preferences: preferences
          .filter(item => item.checked === true)
          .map(e => e.id)
      });
    } catch (_err) {
      this.setState({
        error: "Houve um problema com o login, verifique suas credenciais!"
      });
    }
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
        username: profile.userProfile[0].username,
        preferences: profile.userProfile[0].preferences
      });
    }
  };

  componentDidMount = () => {
    const { profileShowRequest } = this.props;
    profileShowRequest();
  };

  render() {
    const { username, preferences, error, loading } = this.state;

    return (
      <Container>
        {error && <LabelGeral>{error}</LabelGeral>}
        {username == null ? (
          <ActivityIndicator color={colors.colorPrincipal} size="small" />
        ) : (
          <ScrollView>
            <LabelInput>
              Olá,s
              {username}
            </LabelInput>

            <TextOpacity>
              Parece que é seu primeiro acesso por aqui, comece escolhendo
              algumas preferências para selecionarmos os melhores meetups pra
              você:
            </TextOpacity>
            <LabelInput>Preferências:</LabelInput>
            {preferences.map((item, key) => (
              <CheckBox
                containerStyle={{
                  backgroundColor: "transparent",
                  marginTop: 5,
                  padding: 0,
                  borderWidth: 0
                }}
                textStyle={{
                  fontFamily: fonts.FontSecundary,
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

            <Button
              onPress={() => {
                this.handleUpdate();
              }}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <ButtonText>Continuar</ButtonText>
              )}
            </Button>
          </ScrollView>
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ProfileActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
