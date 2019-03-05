import React, { Component, Fragment } from 'react'

import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
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
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#E5556E'
    },

    headerTitle: () => (
      <View style={{ flex: 1 }}>
        <Text
          adjustsFontSizeToFit
          style={{
            textAlign: 'center',
            alignSelf: 'center',
            color: 'white'
          }}>
          Perfil
        </Text>
      </View>
    ),
    headerRight: (
      <TouchableOpacity
        style={{ paddingRight: 20 }}
        onPress={() => {
          AsyncStorage.clear()
          navigation.navigate('SignIn')
        }}>
        <Icon name='person-outline' size={24} color={'white'} />
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity
        style={{ paddingLeft: 20 }}
        onPress={() => navigation.navigate('Dashboard')}>
        <Icon name='chevron-left' size={24} color={'white'} />
      </TouchableOpacity>
    )
  })

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
    const { data } = await api.get('/users/profile')
    this.setState({
      password_original: data[0].password,
      email: data[0].email,
      username: data[0].username,
      password: '',
      password_confirmation: '',
      preferences_user: data[0].preferences
    })
    this.comparePreferences()
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#E5556E' barStyle='light-content' />
        <View style={styles.form}>
          <Text style={styles.labelInput}>Nome</Text>
          <TextInput
            value={this.state.username}
            onChangeText={this.handleNameChange}
            style={styles.textInput}
            placeholderTextColor='gray'
            autoCapitalize='none'
            autoCorrect={false}
            placeholder={this.state.username}
            underlineColorAndroid='transparent'
          />
          <Text style={styles.labelInput}>Senha</Text>
          <TextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            style={styles.textInput}
            placeholderTextColor='gray'
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Sua senha secreta'
            underlineColorAndroid='transparent'
            secureTextEntry
          />
          <Text style={styles.labelInput}>Confirme a senha</Text>
          <TextInput
            value={this.state.password_confirmation}
            onChangeText={this.handlePasswordConfirmChange}
            style={styles.textInput}
            placeholderTextColor='gray'
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Sua senha secreta'
            underlineColorAndroid='transparent'
            secureTextEntry
          />
          <Text style={styles.labelInput}>Preferências:</Text>
          {this.state.preferences.map((item, key) => {
            return (
              <CheckBox
                borderStyle={{ borderWidth: 0 }}
                containerStyle={{
                  backgroundColor: 'transparent',
                  margin: 0,
                  padding: 5,
                  borderWidth: 0
                }}
                color='red'
                key={key}
                title={item.title}
                textStyle={{ color: 'white' }}
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
            style={styles.button}
            onPress={() => {
              this.handleUpdate()
            }}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
