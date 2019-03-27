import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    paddingLeft: metrics.marginMax,
    paddingRight: metrics.marginMax,
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
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: fonts.fontPrimary,
    color: colors.colorTitlePrimary,
    marginTop: metrics.marginMedium,
    marginBottom: metrics.marginMedium,
  },
  buttonText: {
    color: colors.colorTxtPrimary,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: fonts.fontSecundary,
  },
  textOpacity: {
    opacity: 0.6,
    fontFamily: fonts.fontSecundary,
    fontSize: 16,
    color: colors.colorTxtPrimary,
    textAlign: 'center',
  },
  textError: {
    opacity: 0.6,
    fontFamily: fonts.fontSecundary,
    fontSize: 12,
    color: colors.colorPrincipal,
    textAlign: 'center',
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
    paddingBottom: metrics.marginMax,
  },
});

export default styles;
