import { StyleSheet } from 'react-native'

import { colors, metrics } from '../../styles'

import { getStatusBarHeight } from 'react-native-status-bar-height'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.colorPrincipal,
    borderBottomColor: colors.colorPrincipal,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 34 + getStatusBarHeight(),
    justifyContent: 'space-between',
    paddingHorizontal: metrics.marginMax,
    paddingTop: getStatusBarHeight()
  },

  icon: {
    color: colors.colorTxtPrimary
  },

  title: {
    color: colors.colorTxtPrimary,
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center'
  }
})

export default styles
