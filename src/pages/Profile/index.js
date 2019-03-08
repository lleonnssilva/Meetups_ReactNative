import React, { Component, Fragment } from 'react'

import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  AsyncStorage
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import styles from './styles'
import api from '../../services/api'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    username: '',
    preferences: [],
    preferences_user: []
  }

  handleNameChange = (username) => {
    this.setState({ username })
  }

  handlePasswordChange = (password) => {
    this.setState({ password })
  }

  handlePasswordConfirmChange = (password_confirmation) => {
    this.setState({ password_confirmation })
  }

  handleUpdate = async () => {
    try {
      const response = await api.put('/users', {
        username: this.state.username,
        password:
          this.state.password == ''
            ? this.state.password_original
            : this.state.password,
        password_original: this.state.password,
        password_confirmation: this.state.password_confirmation,
        preferences: this.state.preferences
          .filter(function (item) {
            return item.checked == true
          })
          .map((e) => e.id)
      })
      // this.props.navigation.navigate('SignIn')
    } catch (_err) {
      this.setState({
        error: 'Houve um problema com o login, verifique suas credenciais!'
      })
    }
  }

  comparePreferences () {
    let { preferences, preferences_user } = this.state

    for (var i = 0; i < preferences.length; i++) {
      for (var j = 0; j < preferences_user.length; j++) {
        if (preferences[i].id === preferences_user[j].id) {
          preferences[i].checked = true
        }
      }
    }

    this.setState({ preferences })
  }

  onSelectPreference = (key) => {
    let { preferences } = this.state
    preferences[key].checked = !preferences[key].checked
    this.setState({ preferences })
  }

  componentWillMount = async () => {
    const preferences = await api.get('/preferences')
    this.setState({
      preferences: preferences.data
    })
  }

  componentDidMount = async () => {
    const ip = await AsyncStorage.getItem('@MeetupApp:ip')
    const { data } = await api.get('/users/profile')
    this.setState({
      password_original: data[0].password,
      email: data[0].email,
      username: data[0].username,
      password: '',
      password_confirmation: '',
      preferences_user: data[0].preferences,
      ip: ip
    })
    this.comparePreferences()
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor='#E5556E' barStyle='light-content' />

          <Text style={styles.labelGeral}>Nome</Text>
          <TextInput
            value={this.state.username}
            onChangeText={this.handleNameChange}
            style={styles.textNome}
            placeholderTextColor={styles.colorPlaceholder.color}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder={this.state.username}
            underlineColorAndroid='transparent'
          />
          <Text style={styles.labelGeral}>Senha</Text>
          <TextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            style={styles.textGeral}
            placeholderTextColor={styles.colorPlaceholder.color}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Sua senha secreta'
            underlineColorAndroid='transparent'
            secureTextEntry
          />
          <Text style={styles.labelGeral}>Confirmação de senha</Text>
          <TextInput
            value={this.state.password_confirmation}
            onChangeText={this.handlePasswordConfirmChange}
            style={styles.textGeral}
            placeholderTextColor={styles.colorPlaceholder.color}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Sua senha secreta'
            underlineColorAndroid='transparent'
            secureTextEntry
          />
          <Text style={styles.labelGeral}>Preferências</Text>
          {this.state.preferences.map((item, key) => {
            return (
              <CheckBox
                containerStyle={styles.containerItems}
                textStyle={styles.textItems}
                key={key}
                title={item.title}
                checkedIcon={
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require('../../assets/checked.png')}
                  />
                }
                uncheckedIcon={
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require('../../assets/unchcked.png')}
                  />
                }
                checked={item.checked}
                onPress={() => this.onSelectPreference(key)}
              />
            )
          })}

          <TouchableOpacity
            style={styles.buttonSave}
            onPress={() => {
              this.handleUpdate()
            }}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}
