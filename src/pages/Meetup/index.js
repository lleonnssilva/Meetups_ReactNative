import React, { Component } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import api from '../../services/api'


export default class Index extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title:'opa',//navigation.getParam('title'),
  //   headerTintColor: 'white',
  //   headerStyle: {
  //     backgroundColor: '#E5556E'
  //   },

  //   headerTitle: () => (
  //     <View style={{ flex: 1 }}>
  //       <Text
  //         adjustsFontSizeToFit
  //         style={{
  //           textAlign: 'center',
  //           alignSelf: 'center',
  //           color: 'white'
  //         }}>
  //         Detalhes Meetup
  //       </Text>
  //     </View>
  //   ),
  //   headerRight: (
  //     <TouchableOpacity
  //       style={{ paddingRight: 20 }}
  //       onPress={() => {
  //         AsyncStorage.clear()
  //         navigation.navigate('SignIn')
  //       }}>
  //       <Icon name='person-outline' size={24} color={'white'} />
  //     </TouchableOpacity>
  //   ),
  //   headerLeft: (
  //     <TouchableOpacity
  //       style={{ paddingLeft: 20 }}
  //       onPress={() => navigation.goBack()}>
  //       <Icon name='chevron-left' size={24} color={'white'} />
  //     </TouchableOpacity>
  //   )
  // })
  // static navigationOptions = ({ navigation }) => {
  // // const params  = navigation.state.params
  // // console.tron.log('navigation')
  // //   console.tron.log(navigation)
  //   return {
  //   // title: navigation.getParam('title', 'A Nested Details Screen'),
  //   headerRight: (
  //     <Icon  style={{marginRight:20}} name='person-outline' size={24} color={'white'}  onPress={() => navigation.navigate('Profile')} />
  //   ),
  //   headerLeft: (
  //     <Icon  style={{marginLeft:20}} name='person-outline' size={24} color={'white'}  onPress={() => navigation.navigate('Profile')} />
  //   ),
  //   headerStyle: {
  //     backgroundColor: "#E5556E",
  //   },
  //   headerTitleStyle: {
  //     textAlign:"center", 
  //     flex:1 ,
  //     fontWeight: "bold",
  //     color: "#fff",
  //   },
  //     //  title: 'titulo',
  //  // title: navigation.getParam('title'),
  //   //navigation.getParam('title', '-'),
  //   headerTintColor: "#fff",
  //   animationEnabled: true
    
  // }}

  state = {
    meetup: [],
    registered: true,
    subscriptions: 0
  }
  componentDidMount = async () => {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
 
    const { data } = await api.get(`/meetups/${id}`)

    this.setState({
      meetup: data.meetup,
      registered: data.registered,
      subscriptions: data.meetup.__meta__.subscriptions_count
    })
  }

  subscriptionIn = async () => {
    try {
      const { data } = await api.post(`/subscriptions/${this.state.meetup.id}`)
      this.setState({
        meetup: data.meetup,
        registered: data.registered,
        subscriptions: data.meetup.__meta__.subscriptions_count
      })
    } catch (_err) {
       this.setState({ error: 'Erro ao se increver' })
    } finally {
       this.setState({ loading: false, refreshing: false })
    }
  }
  render () {

    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={{ uri: this.state.meetup.image }}
          />

          <View>
            <Text style={styles.labeTitle}>{this.state.meetup.title}</Text>
            <Text style={styles.labelMembers}>
              {this.state.subscriptions} membro(s)
            </Text>
            <Text style={styles.labelDesc}>
              {this.state.meetup.description}
            </Text>
            <Text style={styles.labelRealizacao}>Realizado em:</Text>
            <Text style={styles.labelLocal}>{this.state.meetup.place}</Text>
            {this.state.registered === true ? (
              <TouchableOpacity
                disabled
                style={styles.button}
                onPress={this.subscriptionIn}>
                <Text style={styles.textButton}>Já inscrito</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={this.subscriptionIn}>
                <Text style={styles.textButton}>Inscreva-se</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    )
  }
}
//  Index.navigationOptions = ({ navigation }) => ({

//   headerTintColor: 'white',
//   headerStyle: {
//   backgroundColor: '#E5556E'
//   },

//   headerTitle: () => (
//     <View style={{ flex: 1 }}>
//       <Text
//         adjustsFontSizeToFit
//         style={{
//           textAlign: 'center',
//           alignSelf: 'center',
//           color: 'white'
//         }}>
//         {navigation.getParam('title')}
//       </Text>
//     </View>
//   ),
//   headerRight: (
//     <TouchableOpacity
//       style={{ paddingRight: 20 }}
//       onPress={() => {
//         AsyncStorage.clear()
//         navigation.navigate('SignIn')
//       }}>
//       <Icon name='person-outline' size={24} color={'white'} />
//     </TouchableOpacity>
//   ),
//   headerLeft: (
//     <TouchableOpacity
//       style={{ paddingLeft: 20 }}
//       onPress={() => navigation.goBack()}>
//       <Icon name='chevron-left' size={24} color={'white'} />
//     </TouchableOpacity>
//   )
// })