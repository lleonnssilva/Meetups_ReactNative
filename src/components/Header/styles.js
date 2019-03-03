import { StyleSheet } from 'react-native'

import { colors, metrics } from '../../styles'

// import { getStatusBarHeight } from 'react-native-status-bar-height'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#E5556E',
    borderBottomColor: 'black', // colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding
  },

  icon: {
    color: '#ffffff'
  },

  title: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center'
  }
})

export default styles
