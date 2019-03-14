import Reactotron from 'reactotron-react-native';
import ip from './getIp';

if (__DEV__) {
  const tron = Reactotron.configure({ host: ip.IpReactotron() })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
