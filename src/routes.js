import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAwsome from 'react-native-vector-icons/FontAwesome';
import Search from './pages/Search/index';
import NewMeetup from './pages/NewMeetup/index';
import Dashboard from './pages/Dashboard/index';
import Meetup from './pages/Meetup/index';
import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import Profile from './pages/Profile/index';
import Preferences from './pages/Preferences/index';
import Header from './components/Header';
import { colors } from './styles';

const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: () => ({
      header: <Header title="Busca" />,
    }),
  },
});
const NewMeetupStack = createStackNavigator({
  NewMeetup: {
    screen: NewMeetup,
    navigationOptions: () => ({
      header: <Header title="Novo meetup" />,
    }),
  },
});
const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: () => ({
      header: <Header title="Início" />,
    }),
  },
  Meetup: {
    screen: Meetup,
    navigationOptions: ({ navigation }) => {
      if (navigation.state.params) {
        return {
          header: <Header title={navigation.state.params.title} />,
        };
      }
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      header: <Header title="Perfil" />,
    }),
  },
});

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Abas: createBottomTabNavigator(
        {
          New: {
            screen: NewMeetupStack,
            navigationOptions: () => ({
              tabBarLabel: 'New',
              tabBarIcon: ({ tintColor, activeTintColor }) => (
                <IconAwsome name="plus-square" size={30} color={tintColor} />
              ),
            }),
          },
          Inicio: {
            screen: DashboardStack,
            navigationOptions: () => ({
              tabBarLabel: 'Inicio',
              tabBarIcon: ({ tintColor, activeTintColor }) => (
                <Icon name="home" size={30} color={tintColor} />
              ),
            }),
          },
          Busca: {
            screen: SearchStack,
            navigationOptions: () => ({
              tabBarLabel: 'Busca',
              tabBarIcon: ({ tintColor, activeTintColor }) => (
                <Icon name="search" size={30} color={tintColor} />
              ),
            }),
          },
        },
        {
          tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            showIcon: true,
            style: {
              backgroundColor: colors.colorPrincipal,
              borderTopWidth: 0,
            },
            showLabel: false,
          },
          initialRouteName: 'Inicio',
        },
      ),
      SignIn: { screen: SignIn },
      SignUp: { screen: SignUp },
      Preferences: { screen: Preferences },
    },
    {
      initialRouteName: userLogged ? 'Abas' : 'SignIn',
    },
  ),
);
export default Routes;
