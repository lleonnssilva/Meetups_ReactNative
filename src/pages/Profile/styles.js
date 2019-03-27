import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  buttonSave: {
    backgroundColor: colors.colorPrincipal,
    borderRadius: metrics.borderRadius,
    height: metrics.bootomHeight,
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.marginMax,
  },
  buttonText: {
    color: colors.colorTxtPrimary,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: fonts.fontPrimary,
  },
  labelGeral: {
    fontFamily: fonts.FonteSecundary,
    fontSize: 16,
    color: colors.colorTxtPrimary,
    paddingTop: metrics.marginMax,
    paddingLeft: metrics.marginMax,
  },
  textNome: {
    fontFamily: fonts.FontPrimary,
    fontSize: 20,
    color: colors.colorTxtPrimary,
    paddingTop: metrics.MarginMed,
    paddingLeft: metrics.marginMax,
  },
  textGeral: {
    opacity: 0.5,
    fontFamily: fonts.FontPrimary,
    fontSize: 20,
    color: colors.colorTxtPrimary,
    paddingTop: metrics.MarginMed,
    paddingLeft: metrics.marginMax,
  },
  colorPlaceholder: {
    color: colors.colorTxtPrimary,
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
    paddingLeft: metrics.marginMax,
  },
});

export default styles;
