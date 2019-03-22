import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 210,
  },
  image: {
    width: 290,
    height: 146,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  containerFooter: {
    flexDirection: 'column',
    width: '75%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: metrics.marginMedium,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.colorTerciary,
    flexDirection: 'row',
    width: 290,
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontFamily: fonts.fontSecundary,
    fontSize: 16,
    color: colors.colorPrimary,
    textAlign: 'left',
    paddingTop: metrics.marginMin,
  },
  subscription: {
    fontFamily: fonts.fontPrimary,
    fontSize: 14,
    color: colors.colorTxtSecundary,
    textAlign: 'left',
  },
  containerButtom: {
    width: '25%',
    justifyContent: 'center',
    padding: metrics.marginMedium,
  },
  btn: {
    backgroundColor: colors.colorPrincipal,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  icon: {
    position: 'absolute',
    paddingTop: metrics.marginMax,
    paddingLeft: 121,
  },
});

export default styles;
