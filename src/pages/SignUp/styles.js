import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    padding: metrics.marginMax,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  textError: {
    opacity: 0.5,
    fontFamily: fonts.fontSecundary,
    fontSize: 12,
    color: colors.colorPrincipal,
    textAlign: 'center',
    paddingBottom: metrics.marginMedium,
  },
  form: {
    marginTop: metrics.marginMax,
  },
  textInput: {
    marginTop: metrics.marginMin,
    opacity: 0.5,
    fontFamily: fonts.fontSecundary,
    fontSize: 20,
    color: colors.colorTxtPrimary,
    textAlign: 'left',
  },
  button: {
    backgroundColor: colors.colorPrincipal,
    borderRadius: metrics.borderRadius,
    height: metrics.bootomHeight,
    marginTop: metrics.marginMax,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: fonts.fontPrimary,
    color: colors.colorTitlePrimary,
  },
  buttonText: {
    color: colors.colorTxtPrimary,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: fonts.fontPrimary,
  },
  textOpacity: {
    opacity: 0.6,
    fontFamily: fonts.fontPrimary,
    fontSize: 16,
    color: colors.colorTxtPrimary,
    textAlign: 'center',
    paddingTop: metrics.marginMedium,
  },

  labelInput: {
    fontFamily: fonts.fontPrimary,
    fontSize: 22,
    marginTop: metrics.marginMin,
    color: colors.colorTxtPrimary,
    textAlign: 'left',
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
