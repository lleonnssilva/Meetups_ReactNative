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

  textGeral: {
    opacity: 0.5,
    fontFamily: fonts.FontPrimary,
    fontSize: 20,
    color: colors.colorTxtPrimary,
    paddingTop: metrics.MarginMed,
    paddingLeft: metrics.marginMax,
  },
  button: {
    position: 'absolute',
    justifyContent: 'center',
  },
  image: {
    width: 310,
    height: 164,
    // borderRadius: 5,
    // borderWidth: 1,
    // paddingLeft: 5,
  },
  containerImage: {
    backgroundColor: 'transparent',
    width: 305,
    height: 164,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginTop: metrics.marginMedium,
    marginLeft: metrics.marginMax,
    paddingRight: metrics.marginMax,
    paddingBottom: metrics.marginMedium,
  },

  textItems: {
    fontFamily: fonts.FonteSecundary,
    fontSize: 16,
    color: colors.colorTxtPrimary,
  },
  containerItems: {
    backgroundColor: 'transparent',
    margin: 0,
    borderWidth: 0,
    paddingLeft: 23,
  },
});

export default styles;
