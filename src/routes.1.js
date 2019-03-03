import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation'

import Search from './pages/Search/index'
import Dashboard from './pages/Dashboard/index'
import NewMeetup from './pages/NewMeetup/index'
import Meetup from './pages/Meetup/index'
import SignIn from './pages/SignIn/index'
import SignUp from './pages/SignUp/index'
import Profile from './pages/Profile/index'
import Preferences from './pages/Preferences/index'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn: { screen: SignIn },
        SignUp: { screen: SignUp },
        Profile: { screen: Profile },
        Preferences: { screen: Preferences },
        Abas: createBottomTabNavigator(
          {
            NewMeetup: createStackNavigator({
              NewMeetup: {
                screen: NewMeetup
              }
            }),
            Dashboard: createStackNavigator({
              Meetups: {
                screen: Dashboard
                // navigationOptions: {
                //   tabBarLabel: 'Profile',
                //   tabBarIcon: ({ tintColor, activeTintColor }) => (
                //     <Icon name='home' size={30} color={tintColor} />
                //   )
                // }
              },
              Meetup: { screen: Meetup }
            }),
            Search: createStackNavigator({
              Search: { screen: Search }
            })
          },
          {
            tabBarOptions: {
              activeTintColor: '#fb9800',
              // inactiveTintColor: '#7e7b7b',
              showIcon: true,
              style: {
                height: 154,
                // backgroundColor: '#fff',
                borderTopWidth: 0.5,
                borderTopColor: '#fb9800'
              },

              showLabel: false,
              labelStyle: {
                fontSize: 10
              }
            }
          }
        )
      },
      {
        initialRouteName: userLogged ? 'Abas' : 'SignIn'
      }
    )
  )

export default Routes
