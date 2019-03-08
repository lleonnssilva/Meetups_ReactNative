// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StatusBar,
//   AsyncStorage
// } from 'react-native'

// import { withNavigation } from 'react-navigation'

// import Icon from 'react-native-vector-icons/MaterialIcons'

// import styles from './styles'

// const Header = (props) => {
//   return (
//     <View style={{ backgroundColor: '#E5556E', height: 25 }}>
//       <View
//         style={{
//           flex: 1,
//           flexDirection: 'row',
//           alignContent: 'center',
//           justifyContent: 'center'
//         }}>
//         <TouchableOpacity onPress={this.signOut}>
//           <Icon name='home' size={24} style={styles.icon} />
//         </TouchableOpacity>
//         <Text>{props.title}</Text>
//         <TouchableOpacity
//           onPress={() => {
//             // AsyncStorage.clear()
//             // this.props.navigation.navigate('Profile')
//           }}>
//           <Icon name='person-outline' size={24} color={'white'} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// export default Header
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { View, Text, TouchableOpacity, StatusBar } from 'react-native'

import { withNavigation } from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  }

  signOut = async () => {
    const { navigation } = this.props

    // await AsyncStorage.clear()

    navigation.navigate('Profile')
  }

  render () {
    const { title } = this.props
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#E5556E' barStyle='light-content' />
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name='person-outline' size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(Header)
