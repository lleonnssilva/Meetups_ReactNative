import React from 'react'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation'

import Search from './pages/Search/index'
import NewMeetup from './pages/NewMeetup/index'
import Dashboard from './pages/Dashboard/index'
import Meetup from './pages/Meetup/index'
import SignIn from './pages/SignIn/index'
import SignUp from './pages/SignUp/index'
import Profile from './pages/Profile/index'
import Preferences from './pages/Preferences/index'

import Icon from 'react-native-vector-icons/MaterialIcons'
import IconAwsome from 'react-native-vector-icons/FontAwesome'

const SearchStack = createStackNavigator({
  Search: { screen: Search }
})
const NewMeetupStack = createStackNavigator({
  NewMeetup: { screen: NewMeetup }
})
const DashboardStack = createStackNavigator({
  Dashboard: { screen: Dashboard },
  Meetup: {
    screen: Meetup,
    navigationOptions: () => ({
      tabBarLabel: 'Meetup'
    })
  }
})

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Abas: createBottomTabNavigator(
          {
            New: {
              screen: NewMeetupStack,
              navigationOptions: () => ({
                tabBarLabel: 'New',
                tabBarIcon: ({ tintColor, activeTintColor }) => (
                  <IconAwsome name='plus-square' size={30} color={tintColor} />
                )
              })
            },
            Inicio: {
              screen: DashboardStack,
              navigationOptions: () => ({
                tabBarLabel: 'Inicio',
                tabBarIcon: ({ tintColor, activeTintColor }) => (
                  <Icon name='home' size={30} color={tintColor} />
                )
              })
            },
            Busca: {
              screen: SearchStack,
              navigationOptions: () => ({
                tabBarLabel: 'Busca',
                tabBarIcon: ({ tintColor, activeTintColor }) => (
                  <Icon name='search' size={30} color={tintColor} />
                )
              })
            }
          },
          {
            tabBarOptions: {
              activeTintColor: 'white',
              inactiveTintColor: 'white',
              showIcon: true,
              style: {
                backgroundColor: '#E5556E',
                borderTopWidth: 0
              },
              showLabel: false
            },
            initialRouteName: 'Inicio'
          }
        ),
        SignIn: { screen: SignIn },
        SignUp: { screen: SignUp },
        Profile: createStackNavigator({
          Profile: { screen: Profile }
        }),
        Preferences: { screen: Preferences }
      },
      {
        initialRouteName: userLogged ? 'Abas' : 'SignIn'
      }
    )
  )
export default Routes
