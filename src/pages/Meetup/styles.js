import { StyleSheet } from 'react-native'

import { colors, metrics, fonts } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary
  },
  image: {
    width: '100%',
    height: 212
  },
  labeTitle: {
    marginTop: metrics.marginMax,
    marginLeft: metrics.marginMax,
    fontFamily: fonts.FonteSecundary,
    fontSize: 16,
    color: colors.colorTxtPrimary,
    marginRight: metrics.marginMax
  },
  labelMembers: {
    fontFamily: fonts.FontPrimary,
    fontSize: 14,
    color: colors.colorTxtSecundary,
    paddingTop: metrics.marginMin,
    paddingLeft: metrics.marginMax
  },
  labelDesc: {
    opacity: 0.8,
    fontFamily: fonts.FontPrimary,
    fontSize: 16,
    color: colors.colorTxtPrimary,
    lineHeight: 28,
    marginTop: metrics.marginMedium,
    marginLeft: metrics.marginMax,
    marginRight: metrics.marginMax
  },

  labelRealizacao: {
    fontFamily: fonts.FontPrimary,
    fontSize: 14,
    color: colors.colorTxtSecundary,
    marginTop: metrics.marginMax,
    marginLeft: metrics.marginMax
  },
  labelLocal: {
    opacity: 0.8,
    fontFamily: fonts.FontPrimary,
    fontSize: 14,
    color: colors.colorTxtPrimary,
    lineHeight: 24,
    marginTop: metrics.marginMin,
    marginLeft: metrics.marginMax,
    marginRight: metrics.marginMax
  },
  button: {
    backgroundColor: colors.colorPrincipal,
    borderRadius: 60,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: fonts.fontPrimary,
    color: colors.colorTxtSecundary,
    margin: 30,
    paddingLeft: metrics.marginMax,
    paddingRight: metrics.marginMax
  },
  textButton: {
    fontFamily: fonts.FonteSecundary,
    fontSize: 16,
    color: colors.colorTxtPrimary
  }
})

export default styles
