import { StyleSheet } from 'react-native'

import { colors, metrics, fonts } from '../../styles/index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  buttonSave: {
    backgroundColor: colors.colorPrincipal,
    borderRadius: 60,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.marginMax
  },
  buttonText: {
    color: colors.colorTxtPrimary,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: fonts.fontPrimary
  },
  labelGeral: {
    fontFamily: fonts.FonteSecundary,
    fontSize: 16,
    color: colors.colorTxtPrimary,
    paddingTop: metrics.marginMax,
    paddingLeft: metrics.marginMax
  },
  textNome: {
    fontFamily: fonts.FontPrimary,
    fontSize: 20,
    color: colors.colorTxtPrimary,
    marginTop: metrics.MarginMed,
    marginLeft: metrics.marginMax
  },
  textGeral: {
    opacity: 0.5,
    fontFamily: fonts.FontPrimary,
    fontSize: 20,
    color: colors.colorTxtPrimary,
    marginTop: metrics.MarginMed,
    marginLeft: metrics.marginMax
  },
  colorPlaceholder: {
    color: colors.colorTxtPrimary
  },
  textItems: {
    fontFamily: fonts.FonteSecundary,
    fontSize: 18,
    color: colors.colorTxtPrimary
  },
  containerItems: {
    backgroundColor: 'transparent',
    margin: 0,
    padding: 5,
    borderWidth: 0,
    paddingLeft: 30,
    paddingTop: 14
  }
})

export default styles
