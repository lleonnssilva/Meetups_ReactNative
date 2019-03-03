import React, { Component } from 'react'
import { View } from 'react-native'
import { CheckBox } from 'react-native-elements'

const styles = {
  CheckBox: {
    borderBottomWidth: 0.3,
    borderBottomColor: 'gray'
  },
  checkBox: {
    backgroundColor: '#ffffff',
    borderWidth: 0
  },
  text: {
    flex: 0.95,
    backgroundColor: '#ffffff'
  }
}

const languages = ['中文', '英文', '日文', '韓文']

class Language extends Component {
  constructor (props) {
    super(props)
    this.state = { checked: false }
  }

  onPress = () => {
    this.setState({ checked: !this.state.checked })
  }

  renderlanguages = () => {
    return languages.map((langauge) => {
      return (
        <View key={langauge} style={styles.CheckBox}>
          <CheckBox
            title={langauge}
            iconRight
            containerStyle={styles.checkBox}
            textStyle={styles.text}
            checkedColor='red'
            checked={this.state.checked}
            onPress={this.onPress}
          />
        </View>
      )
    })
  }

  render () {
    return <View>{this.renderlanguages()}</View>
  }
}

export default Language
