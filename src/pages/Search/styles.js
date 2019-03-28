import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics } from '../../styles';

const { width } = Dimensions.get('window');
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
    marginLeft: metrics.marginMax,
    marginRight: metrics.marginMax,
    marginTop: metrics.marginMin,
    marginBottom: metrics.marginMin,
  },
  searchIcon: {
    paddingLeft: metrics.marginMin,
  },
  input: {
    backgroundColor: colors.colorSecundary,
    color: '#8e8e93',
    width: width - metrics.marginMax * 4,
  },
  separator: {
    height: 20,
    backgroundColor: colors.colorPrimary,
  },
  listContainer: {
    marginRight: metrics.marginMedium,
    marginLeft: metrics.marginMax,
  },
});

export default styles;
