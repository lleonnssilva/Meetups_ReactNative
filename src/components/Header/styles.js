import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.colorPrincipal,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.marginMax,
  },

  title: {
    color: colors.colorTxtPrimary,
    fontSize: 18,
    fontFamily: fonts.fontSecundary,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusbar: {
    backgroundColor: colors.colorPrincipal,
  },
});

export default styles;
