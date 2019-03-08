import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
  marginSubMin: 4,
  marginMin: 10,
  marginSubMedim: 14,
  marginMedium: 20,
  marginMax: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width
}
