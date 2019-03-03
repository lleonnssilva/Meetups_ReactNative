import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

import './config/ReactotronConfig'
import './config/DevToolsConfig'

import createNavigator from './routes'

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false
  }
  async componentDidMount () {
    // AsyncStorage.clear()
    const token = await AsyncStorage.getItem('@MeetupApp:token')
    const email = await AsyncStorage.getItem('@MeetupApp:email')
    console.tron.log(email)
    this.setState({
      userChecked: true,
      userLogged: !!token
    })
  }
  render () {
    const { userChecked, userLogged } = this.state

    if (!userChecked) return null
    const Routes = createNavigator(userLogged)
    return <Routes />
  }
}
