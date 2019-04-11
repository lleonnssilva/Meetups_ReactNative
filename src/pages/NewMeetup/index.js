import React, { Component, Fragment } from "react";

import { View, Image, ScrollView, ActivityIndicator } from "react-native";

import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import ImagePicker from "react-native-image-picker";
import { CheckBox } from "react-native-elements";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MeetupActions } from "~/store/ducks/meetup";
import { Creators as PreferencesActions } from "~/store/ducks/preferences";
import { colors, fonts } from "~/styles";

import {
  Container,
  LabelGeral,
  TextGeral,
  ButtonSave,
  ButtonText,
  ContainerImage,
  ButtonImage
} from "./styles";

class NewMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      title: null,
      place: null,
      description: null,
      event_date: new Date(),
      numLimitSubscriptions: 1000,
      preferences: []
    };
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ img: response });
      }
    });
  };

  handleSave = async () => {
    const {
      img,
      title,
      place,
      description,
      event_date,
      numLimitSubscriptions,
      preferences
    } = this.state;
    const { meetupCreateRequest } = this.props;
    const imageMeetup = new FormData();

    imageMeetup.append("file", {
      uri: img.uri,
      type: img.type,
      name: img.fileName
    });

    meetupCreateRequest({
      title,
      place,
      description,
      event_date,
      numLimitSubscriptions,
      preferences: preferences
        .filter(item => item.checked === true)
        .map(e => e.id),
      imageMeetup
    });
  };

  handletitleChange = title => {
    this.setState({ title });
  };

  handleplaceChange = place => {
    this.setState({ place });
  };

  handleDescriptionChange = description => {
    this.setState({ description });
  };

  onSelectPreference = key => {
    const { preferences } = this.state;
    preferences[key].checked = !preferences[key].checked;
    this.setState({ preferences });
  };

  componentWillReceiveProps = data => {
    if (data.preference.preferences !== null) {
      this.setState({ preferences: data.preference.preferences });
    }
  };

  componentDidMount = async () => {
    try {
      const { preferencesRequest } = this.props;
      preferencesRequest();
    } catch (_err) {
      console.tron.log(_err);
      this.setState({ error: "Erro ao recuperar os meetups recomendados" });
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  render() {
    const { error, loading } = this.props;

    const {
      img,
      title,
      place,
      description,
      event_date,
      numLimitSubscriptions,
      preferences
    } = this.state;

    return (
      <Container>
        <ScrollView>
          <View>
            {error && <LabelGeral>{error}</LabelGeral>}
            <LabelGeral>Título</LabelGeral>
            <TextGeral
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite o título do meetup"
              underlineColorAndroid="transparent"
              value={title}
              onChangeText={this.handletitleChange}
            />
            <LabelGeral>Descrição</LabelGeral>
            <TextGeral
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Descreva seu meetup"
              underlineColorAndroid="transparent"
              value={description}
              onChangeText={this.handleDescriptionChange}
            />
            <LabelGeral>Imagem</LabelGeral>
            <ContainerImage>
              {img && (
                <Fragment>
                  <Image resizeMode="stretch" source={{ uri: img.uri }} />
                </Fragment>
              )}
              <ButtonImage onPress={this.handleChoosePhoto}>
                <IconFontAwesome
                  visible={false}
                  name="camera"
                  size={24}
                  color="white"
                />
              </ButtonImage>
            </ContainerImage>
            <LabelGeral>Localização</LabelGeral>
            <TextGeral
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Onde seu meetup irá acontecer?"
              underlineColorAndroid="transparent"
              value={place}
              onChangeText={this.handleplaceChange}
            />
            <LabelGeral>Tema do meetup</LabelGeral>
            {preferences.map((item, key) => (
              <CheckBox
                containerStyle={{
                  backgroundColor: "transparent",
                  marginTop: 5,
                  padding: 0,
                  borderWidth: 0,
                  paddingLeft: 30
                }}
                textStyle={{
                  fontFamily: fonts.fontSecundary,
                  fontSize: 18,
                  color: colors.colorTxtPrimary
                }}
                key={key}
                title={item.title}
                checkedIcon={
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("~/assets/checked.png")}
                  />
                }
                uncheckedIcon={
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("~/assets/unchcked.png")}
                  />
                }
                checked={item.checked}
                onPress={() => this.onSelectPreference(key)}
              />
            ))}

            <ButtonSave
              onPress={() => {
                this.handleSave();
              }}
            >
              {loading ? (
                <ActivityIndicator size="small" color={colors.colorSecundary} />
              ) : (
                <ButtonText>Salvar</ButtonText>
              )}
            </ButtonSave>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  meetup: state.meetup,
  error: state.meetup.error,
  loading: state.meetup.loading,
  preference: state.preferences
});

const mapDispatchToProps = {
  ...MeetupActions,
  ...PreferencesActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMeetup);
