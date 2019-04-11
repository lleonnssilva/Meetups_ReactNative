import { combineReducers } from "redux";

import login from "./login";
import signUp from "./signUp";
import profile from "./profile";
import preferences from "./preferences";
import meetup from "./meetup";
import file from "./file";
import meetups from "./meetups";

export default combineReducers({
  login,
  signUp,
  profile,
  preferences,
  meetup,
  file,
  meetups
});
