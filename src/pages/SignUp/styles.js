import { StyleSheet } from 'react-native'

import { colors, metrics, fonts } from '../../styles/index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  form: {
    marginTop: metrics.marginMax
  },
  textInput: {
    marginTop: 10,

    fontFamily: fonts.fontSecundary,
    fontSize: 20,
    color: 'white', // colors.colorPrimary,
    textAlign: 'left'
  },
  button: {
    backgroundColor: colors.colorPrincipal,
    borderRadius: 60,
    height: 44,
    marginTop: metrics.marginMax,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: fonts.fontPrimary,
    color: colors.colorTitlePrimary
  },
  buttonText: {
    color: colors.colorTitlePrimary,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: fonts.fontPrimary
  },
  textOpacity: {
    opacity: 0.6,
    fontFamily: fonts.fontSecundary,
    fontSize: 16,
    color: colors.colorSecundary,
    textAlign: 'center',
    paddingTop: 20
  },

  labelInput: {
    fontFamily: fonts.fontPrimary,
    fontSize: 22,
    marginTop: 10,
    color: 'white', // colors.colorSecundary,
    textAlign: 'left'
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 90
  }
})

export default styles
