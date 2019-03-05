import React from 'react'

import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

const MeetupItem = ({ props, meetup, registered, subscriptions }) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      height: 210
    }}>
    <Image
      style={{
        width: 335,
        height: 146,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
      }}
      // source={require('../../assets/default.png')}
      source={{ uri: meetup.image }}
      // http://192.168.208.104:3333/files/10
    />

    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
      }}>
      <View
        style={{
          flexDirection: 'column',
          width: '75%',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          paddingLeft: 20
        }}>
        <Text
          style={{
            fontFamily: 'Helvetica-Bold',
            fontSize: 16,
            color: '#222222',
            textAlign: 'left',
            paddingTop: 10
          }}>
          {meetup.title}
        </Text>
        <Text
          style={{
            fontFamily: 'Helvetica',
            fontSize: 14,
            color: '#999999',
            textAlign: 'left'
          }}>
          {subscriptions == null ? 0 : subscriptions} membros |
          {registered == false
            ? ' Você não está inscrito'
            : ' Você está inscrito'}
        </Text>
      </View>

      <View
        style={{
          // backgroundColor: 'black',
          width: '25%',
          justifyContent: 'center',
          paddingRigth: 20
        }}>
        <TouchableOpacity
          onPress={() => {
            const { navigation } = props.props

            navigation.navigate('Meetup', meetup.id)
          }}
          style={{
            backgroundColor: '#E5556E',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 40,
            margin: 20,
            paddingTop: 0,
            paddingRigth: 20
          }}>
          <Icon tintColor={'white'} name='chevron-right' color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

export default MeetupItem
