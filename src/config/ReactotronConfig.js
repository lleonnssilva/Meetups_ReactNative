import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import reactotronSaga from "reactotron-redux-saga";
import { UrlReactotron } from "./baseURL";

if (__DEV__) {
  const tron = Reactotron.configure({ host: UrlReactotron() })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
