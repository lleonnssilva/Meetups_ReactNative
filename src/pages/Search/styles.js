import { StyleSheet } from 'react-native'
import { colors, metrics, fonts } from '../../styles'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.colorSecundary,
    height: 50,
    borderRadius: 10,
    margin: 20
  },
  searchIcon: {
    marginRight: 10,
    marginLeft: 10
  },
  input: {
    backgroundColor: colors.colorSecundary,
    color: '#8e8e93',
    width: 300
  },
  separator: {
    height: 20,
    backgroundColor: colors.colorPrimary
  },
  listContainer: {
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default styles
