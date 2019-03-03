import React, { Component } from 'react'

import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import api from '../../services/api'

export default class SigUp extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    username: ''
  }

  handleNameChange = (username) => {
    this.setState({ username })
  }

  handleEmailChange = (email) => {
    this.setState({ email })
  }

  handlePasswordChange = (password) => {
    this.setState({ password })
  }
  handlePasswordConfirmChange = (password_confirmation) => {
    this.setState({ password_confirmation })
  }
  handleCreateAccountPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
    }
  }
  handleCreateAccountPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState(
        { error: 'Preencha usuário e senha para continuar!' },
        () => false
      )
    } else {
      // try {
      //   const response = await api.post('/users', {
      //     username: this.state.username,
      //     email: this.state.email,
      //     password: this.state.password,
      //     password_confirmation: this.state.password_confirmation,
      //     Preferences: []
      //   })
      //   await AsyncStorage.setItem('@MeetupApp:token', response.data.token)

      //   this.setState({ response.data })
      //   console.tron.log(response.data.token)
      //   const { navigation } = this.props
      this.props.navigation.navigate('Preferences', (user = this.state))
      // } catch (_err) {
      //   this.setState({
      //     error: 'Houve um problema com o login, verifique suas credenciais!'
      //   })
      // }
    }
  }
  componentDidMount = async () => {
    const user = await this.props.navigation.state.params
    if (user) {
      this.setState({
        email: user.email,
        username: user.username,
        password: user.password,
        password_confirmation: user.password_confirmation,
        preferences: user.preferences
      })
    }
    {
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require('../../assets/logo.png')}
            resizeMode='stretch'
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.labelInput}>Nome</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor='gray'
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Digite seu nome'
            underlineColorAndroid='transparent'
            value={this.state.username}
            onChangeText={this.handleNameChange}
          />
          <Text style={styles.labelInput}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor='gray'
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Digite seu e-mail'
            underlineColorAndroid='transparent'
            value={this.state.email}
            onChangeText={this.handleEmailChange}
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleCreateAccountPress()
            }}>
            <Text style={styles.buttonText}>Criar conta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const { navigation } = this.props
              navigation.navigate('SignIn')
            }}>
            <Text style={styles.textOpacity}>Já tenho conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
