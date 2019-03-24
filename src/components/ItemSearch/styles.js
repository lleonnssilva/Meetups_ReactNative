import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 335,
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
    backgroundColor: 'white',
    flexDirection: 'row',
    width: 335,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 16,
    color: '#222222',
    textAlign: 'left',
    paddingTop: metrics.marginMin,
  },
  subscription: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#999999',
    textAlign: 'left',
  },
  containerButtom: {
    width: '25%',
    justifyContent: 'center',
    padding: metrics.marginMedium,
  },
  btn: {
    backgroundColor: '#E5556E',
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
