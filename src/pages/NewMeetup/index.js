import React, { Component, Fragment } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import ImagePicker from "react-native-image-picker";
import { CheckBox } from "react-native-elements";
import styles from "./styles";
import api from "../../services/api";

export default class newMeetup extends Component {
  state = {
    img: null,
    title: null,
    place: null,
    description: null,
    event_date: new Date(),
    image: "default.png",
    numLimitSubscriptions: 1000,
    preferences: []
  };

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
    itensPreferences = this.state.preferences
      .filter(function(item) {
        return item.checked == true;
      })
      .map(e => e.id);

    const imageMeetup = new FormData();

    imageMeetup.append("file", {
      uri: this.state.img.uri,
      type: this.state.img.type,
      name: this.state.img.fileName
    });

    const file = await api.post(`/files`, imageMeetup);
    console.tron.log(file.data.id);
    const response = await api.post("/meetups", {
      title: this.state.title,
      place: this.state.place,
      description: this.state.description,
      event_date: this.state.event_date,
      image: file.data.id,
      numLimitSubscriptions: this.state.numLimitSubscriptions,
      preferences: itensPreferences
    });
    this.props.navigation.navigate("Dashboard");
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

  onChange = key => {
    let { preferences } = this.state;
    preferences[key].checked = !preferences[key].checked;
    this.setState({ preferences });
  };
  componentDidMount = async () => {
    try {
      const { data } = await api.get("/preferences");

      this.setState({ preferences: data });
    } catch (_err) {
      this.setState({ error: "Erro ao recuperar os meetups recomendados" });
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  render() {
    const { img } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.labelGeral}>Título</Text>
            <TextInput
              style={styles.textGeral}
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite o título do meetup"
              underlineColorAndroid="transparent"
              value={this.state.title}
              onChangeText={this.handletitleChange}
            />
            <Text style={styles.labelGeral}>Descrição</Text>
            <TextInput
              style={styles.textGeral}
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Descreva seu meetup"
              underlineColorAndroid="transparent"
              value={this.state.description}
              onChangeText={this.handleDescriptionChange}
            />
            <Text style={styles.labelGeral}>Imagem</Text>

            <View style={styles.containerImage}>
              {img && (
                <Fragment>
                  <Image source={{ uri: img.uri }} style={styles.image} />
                </Fragment>
              )}

              <TouchableOpacity
                onPress={this.handleChoosePhoto}
                style={styles.button}
              >
                <IconFontAwesome
                  visible={false}
                  name="camera"
                  size={24}
                  color={"white"}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.labelGeral}>Localização</Text>
            <TextInput
              style={styles.textGeral}
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Onde seu meetup irá acontecer?"
              underlineColorAndroid="transparent"
              value={this.state.place}
              onChangeText={this.handleplaceChange}
            />
            <Text style={styles.labelGeral}>Tema do meetup</Text>

            {this.state.preferences.map((item, key) => {
              return (
                <CheckBox
                  borderStyle={{ borderWidth: 0 }}
                  containerStyle={styles.containerItems}
                  key={key}
                  title={item.title}
                  textStyle={styles.textItems}
                  checkedIcon={
                    <Image
                      style={{ width: 24, height: 24 }}
                      source={require("../../assets/checked.png")}
                    />
                  }
                  uncheckedIcon={
                    <Image
                      style={{ width: 24, height: 24 }}
                      source={require("../../assets/unchcked.png")}
                    />
                  }
                  checked={item.checked}
                  onPress={() => this.onChange(key)}
                />
              );
            })}

            <TouchableOpacity
              style={styles.buttonSave}
              onPress={() => {
                this.handleSave();
              }}
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
