import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorPrimary,
    flex: 1,
  },
  error: {
    color: colors.colorPrincipal,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: fonts.fontSecundary,
  },
  separador: {
    height: metrics.marginMedium,
    width: metrics.marginMedium,
    backgroundColor: colors.colorPrimary,
  },
  containerItens: {
    paddingLeft: metrics.marginMedium,
    paddingTop: metrics.marginMedium,
    paddingRight: metrics.marginMedium,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.colorTxtPrimary,
    paddingBottom: metrics.marginMin,
    fontFamily: fonts.fontSecundary,
  },
});

export default styles;
