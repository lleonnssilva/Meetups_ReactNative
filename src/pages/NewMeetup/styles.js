import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    padding: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
  },

  buttonSave: {
    backgroundColor: colors.colorPrincipal,
    borderRadius: 30,
    height: 44,
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

  textGeral: {
    opacity: 0.5,
    fontFamily: fonts.FontPrimary,
    fontSize: 20,
    color: colors.colorTxtPrimary,
    marginTop: metrics.MarginMed,
    marginLeft: metrics.marginMax,
  },

  image: {
    width: 345,
    height: 164,
  },
  containerImage: {
    width: 345,
    height: 184,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginTop: metrics.MarginMed,
    marginLeft: metrics.marginMax,
    marginBottom: metrics.marginMedium,
  },

  textItems: {
    fontFamily: fonts.FonteSecundary,
    fontSize: 16,
    color: colors.colorTxtPrimary,
  },
  containerItems: {
    backgroundColor: 'transparent',
    margin: 0,
    padding: 5,
    borderWidth: 0,
    paddingLeft: metrics.marginMax,
    paddingTop: 14,
  },
});

export default styles;
