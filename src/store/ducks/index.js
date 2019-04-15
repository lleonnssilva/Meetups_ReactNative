import { combineReducers } from "redux";

import profile from "./profile";
import preferences from "./preferences";
import meetup from "./meetup";
import meetups from "./meetups";

export default combineReducers({
  profile,
  preferences,
  meetup,
  meetups
});
