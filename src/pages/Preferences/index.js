// import React from 'react'

// import { View, Text, TouchableOpacity } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialIcons'
// // import styles from './styles';

// const Details = () => (
//   <View>
//     <Text>Leo</Text>
//   </View>
// )
// Details.navigationOptions = ({ navigation }) => ({
//   headerBackTitle: null,
//   headerTintColor: '#FFF',
//   headerStyle: {
//     backgroundColor: '#111',
//     borderBottomColor: 'transparent',
//     borderWidth: 0,
//     elevation: 0,
//     shadowOpacity: 0
//   },
//   headerBackTitle: true,
//   headerTitle: () => (
//     <View style={{ flex: 1 }}>
//       <Text
//         adjustsFontSizeToFit
//         style={{
//           textAlign: 'center',
//           alignSelf: 'center',
//           color: 'white',
//           borderBottomColor: 'transparent',
//           borderWidth: 0,
//           elevation: 0,
//           shadowOpacity: 0
//         }}>
//         Details
//       </Text>
//     </View>
//   ),
//   headerRight: (
//     <TouchableOpacity
//       onPress={() => {
//         navigation.navigate('search')
//       }}>
//       <Icon name='person-outline' size={24} />
//     </TouchableOpacity>
//   ),
//   headerLeft: (
//     <TouchableOpacity
//       onPress={() => {
//         navigation.navigate('NewMeetup')
//       }}>
//       <Icon name='chevron-left' size={24} />
//     </TouchableOpacity>
//   )
// })
// export default Details
import React, { Component, Fragment } from 'react'

import {
  Button,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker'
import { CheckBox } from 'react-native-elements'
import styles from './styles'
import api from '../../services/api'
export default class Login extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    username: '',
    preferences: []
  }
  handleBack = () => {
    this.props.navigation.navigate('SignUp', (user = this.state))
  }
  handleSignInPress = async () => {
    try {
      const response = await api.post('/users', {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        Preferences: this.state.preferences
      })

      this.props.navigation.navigate('SignIn')
    } catch (_err) {
      this.setState({
        error: 'Houve um problema com o login, verifique suas credenciais!'
      })
    }
  }

  onChange = (key) => {
    let { preferences } = this.state
    preferences[key].checked = !preferences[key].checked
    this.setState({ preferences })
  }

  componentDidMount = async () => {
    const user = await this.props.navigation.state.params
    if (user.preferences) {
      try {
        this.setState({
          email: user.email,
          username: user.username,
          password: user.password,
          password_confirmation: user.password_confirmation,
          preferences: user.preferences
        })
      } catch (_err) {
        this.setState({ error: 'Erro ao recuperar os meetups recomendados' })
      } finally {
        this.setState({ loading: false, refreshing: false })
      }
    } else {
      const preferences = await api.get('/preferences')
      this.setState({
        email: user.email,
        username: user.username,
        password: user.password,
        password_confirmation: user.password_confirmation,
        preferences: preferences.data
      })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.labelInput}>Olá, {this.state.username} </Text>

          <Text style={styles.textOpacity}>
            Parece que é seu primeiro acesso por aqui, comece escolhendo algumas
            preferências para selecionarmos os melhores meetups pra você:
          </Text>
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
                onPress={() => this.onChange(key)}
              />
            )
            console.tron.log(item)
          })}

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleBack()
            }}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleSignInPress()
            }}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
