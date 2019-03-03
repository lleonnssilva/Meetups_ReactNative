import { StyleSheet } from 'react-native'

import { colors, metrics, fonts } from '../../styles/index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary
  },
  form: {
    marginTop: metrics.baseMargin * 2
  },
  textInput: {
    marginTop: 10,
    opacity: fonts.fontOpacity,
    fontFamily: fonts.fontSecundary,
    fontSize: 20,
    color: colors.colorPrimary,
    textAlign: 'left'
  },
  buttonDisable: {
    backgroundColor: 'gray',
    borderRadius: 60,
    height: 44,
    // marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: fonts.fontPrimary,
    color: colors.colorTitlePrimary,
    margin: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  button: {
    backgroundColor: colors.colorPrincipal,
    borderRadius: 60,
    height: 44,
    // marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: fonts.fontPrimary,
    color: colors.colorTitlePrimary,
    margin: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  buttonText: {
    color: colors.colorTitlePrimary,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: fonts.fontPrimary
  },
  textOpacity: {
    opacity: 0.8,
    fontFamily: fonts.fontSecundary,
    fontSize: 16,
    color: colors.colorTitleSecundary,
    textAlign: 'left',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30
  },

  labelInput: {
    fontFamily: fonts.fontPrimary,
    fontSize: 22,
    marginTop: 10,
    color: 'white', // colors.colorSecundary,
    textAlign: 'left',
    paddingLeft: 30
  },
  logo: {
    padding: 0
  }
})

export default styles
