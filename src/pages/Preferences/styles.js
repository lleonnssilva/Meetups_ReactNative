import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    padding: metrics.marginMax,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  form: {
    marginTop: metrics.marginMax,
  },
  textItems: {
    fontFamily: fonts.FonteSecundary,
    fontSize: 18,
    color: colors.colorTxtPrimary,
  },
  containerItems: {
    backgroundColor: 'transparent',
    marginTop: 5,
    padding: 0,
    borderWidth: 0,
  },
  button: {
    backgroundColor: colors.colorPrincipal,
    borderRadius: metrics.borderRadius,
    height: metrics.bootomHeight,
    marginTop: metrics.marginMax,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: fonts.fontPrimary,
    color: colors.colorPrimary,
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
    color: colors.colorTxtSecundary,
    textAlign: 'left',
    paddingTop: metrics.marginMedium,
  },

  labelInput: {
    fontFamily: fonts.fontSecundary,
    fontSize: 24,
    marginTop: metrics.marginMin,
    color: colors.colorTerciary,
    textAlign: 'left',
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 90,
  },
});

export default styles;
