import axios from "axios";

import { AsyncStorage } from "react-native";
import { UrlApi } from "~/config/baseURL";

const api = axios.create({
  baseURL: UrlApi()
});

api.interceptors.request.use(async config => {
  try {
    const token = await AsyncStorage.getItem("@MeetupApp:token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (err) {
    alert(err);
  }
});

export default api;
