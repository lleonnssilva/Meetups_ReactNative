import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    paddingTop: metrics.marginMax,
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
    paddingBottom: metrics.MarginMed,
    paddingLeft: metrics.marginMax,
    paddingRight: metrics.marginMax,
  },

  textGeral: {
    opacity: 0.5,
    fontFamily: fonts.FontPrimary,
    fontSize: 20,
    color: colors.colorTxtPrimary,
    paddingTop: metrics.MarginMed,
    paddingLeft: metrics.marginMax,
    paddingRight: metrics.marginMax,
  },
  button: {
    position: 'absolute',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 5,
    borderWidth: 1,
  },
  containerImage: {
    backgroundColor: 'transparent',
    height: 164,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginLeft: metrics.marginMax,
    marginRight: metrics.marginMax,
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
