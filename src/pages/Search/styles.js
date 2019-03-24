import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.colorSecundary,
    height: 40,
    borderRadius: metrics.marginMin,
    marginLeft: metrics.marginMedium,
    marginRight: metrics.marginMedium,
    marginTop: metrics.marginMin,
    marginBottom: metrics.marginMin,
  },
  searchIcon: {
    marginRight: metrics.marginMin,
    marginLeft: metrics.marginMin,
  },
  input: {
    backgroundColor: colors.colorSecundary,
    color: '#8e8e93',
    width: 300,
  },
  separator: {
    height: 20,
    backgroundColor: colors.colorPrimary,
  },
  listContainer: {
    paddingLeft: metrics.marginMedium,
    paddingRight: metrics.marginMedium,
  },
});

export default styles;
