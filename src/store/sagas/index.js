import { AsyncStorage } from "react-native";
import { all, takeLatest, call, put } from "redux-saga/effects";

import { navigate } from "~/services/navigator";
import * as apiConfig from "~/services/apiConfig";

import {
  Creators as PofileActions,
  Types as ProfileTypes
} from "../ducks/profile";
import {
  Creators as PreferencesActions,
  Types as PreferencesTypes
} from "../ducks/preferences";
import {
  Creators as MeetupActions,
  Types as MeetupTypes
} from "../ducks/meetup";
import {
  Creators as MeetupsActions,
  Types as MeetupsTypes
} from "../ducks/meetups";

export const getUserFromState = state => state.preferences;

function* login(action) {
  try {
    const data = yield call(apiConfig.login, action.params);
    yield put(PofileActions.loginSuccess(action.params));
    yield AsyncStorage.setItem("@MeetupApp:token", data.data.token);
    navigate("Dashboard");
  } catch (err) {
    yield put({
      type: "LOGIN_FAILURE",
      payload: {
        msgError:
          err.response.status === 400
            ? err.response.data[0].message
            : "Email não localizado!"
      }
    });
  }
}
function* signUp(action) {
  try {
    const response = yield call(apiConfig.signup, action.params);
    yield put(PofileActions.signUpSuccess(action.params));
    const data = yield call(apiConfig.login, action.params);
    yield AsyncStorage.setItem("@MeetupApp:token", data.data.token);
    navigate("Preferences");
  } catch (err) {
    yield put({
      type: "SIGNUP_FAILURE",
      payload: {
        msgError: "Erro ao cadastrar usuário!."
      }
    });
  }
}

function* profileUpdate(action) {
  try {
    const response = yield call(apiConfig.profileUpdate, action.params);
    yield put(PofileActions.profileUpdateSuccess());

    const meetupsRecommendeds = yield call(apiConfig.meetupsRecommendeds, {
      id: 1
    });
    yield put(
      MeetupsActions.meetupsRecommendedSuccess(meetupsRecommendeds.data)
    );
  } catch (err) {
    yield put({
      type: "PROFILE_UPDATE_FAILURE",
      payload: { msgError: "Erro ao atualizar o perfil!." }
    });
  }
}
function* profileCreate(action) {
  try {
    const response = yield call(apiConfig.profileCreate, action.params);
    yield put(PofileActions.profileCreateSuccess(action.params));
    navigate("Dashboard");
  } catch (err) {
    yield put({
      type: "PROFILE_CREATE_FAILURE",
      payload: { msgError: "Erro ao criar o perfil!." }
    });
  }
}
function* profileShow() {
  try {
    const prefer = yield call(apiConfig.preferences);
    const { data } = yield call(apiConfig.profileShow);

    for (let i = 0; i < prefer.data.length; i++) {
      for (let j = 0; j < data[0].preferences.length; j++) {
        if (prefer.data[i].id === data[0].preferences[j].id) {
          prefer.data[i].checked = true;
        }
      }
    }
    data[0].preferences = prefer.data;
    yield put(PofileActions.profileShowSuccess(data));
  } catch (err) {
    yield put({
      type: "PROFILE_SHOW_FAILURE",
      payload: { msgError: "Erro ao mostrar o perfil!." }
    });
  }
}
function* meetupShow(action) {
  try {
    const data = yield call(apiConfig.meetupShow, action.params);
    yield put(MeetupActions.meetupShowSuccess(data.data));
    navigate("Meetup", { title: data.data.meetup.title || "" });
  } catch (err) {
    yield put({
      type: "MEETUP_SHOW_FAILURE",
      payload: { msgError: "Erro ao mostrar o meetup!." }
    });
  }
}
function* fileCreate(action) {
  try {
    const response = yield call(apiConfig.fileCreate, action.params);
    yield put(MeetupActions.fileuploadSuccess(response.data));
  } catch (err) {
    yield put({
      type: "FILE_UPLOAD_FAILURE",
      payload: { msgError: "Erro ao criar o arquivo!." }
    });
  }
}
function* meetupCreate(action) {
  try {
    const response = yield call(
      apiConfig.fileCreate,
      action.params.imageMeetup
    );
    const newMeetup = {
      image: response.data,
      ...action.params
    };

    const data = yield call(apiConfig.meetupCreate, newMeetup);
    yield put(MeetupActions.meetupCreateSuccess(data.data));

    const newMeetups = yield call(apiConfig.meetupsUnsigneds, { id: 1 });
    yield put(MeetupsActions.meetupsUnsignedsSuccess(newMeetups.data));

    navigate("Dashboard");
  } catch (err) {
    yield put({
      type: "MEETUP_CREATE_FAILURE",
      payload: {
        msgError: err.response.data[0].message
      }
    });
  }
}
function* meetupSubscription(action) {
  try {
    const response = yield call(apiConfig.subscription, action.params);
    yield put(MeetupActions.meetupSubscriptionSuccess(response.data));

    const meetupsSigneds = yield call(apiConfig.meetupsSigneds, {
      id: 1
    });
    yield put(MeetupsActions.meetupsSignedsSuccess(meetupsSigneds.data));

    const meetupsUnsigneds = yield call(apiConfig.meetupsUnsigneds, {
      id: 1
    });
    yield put(MeetupsActions.meetupsUnsignedsSuccess(meetupsUnsigneds.data));

    const meetupsRecommendeds = yield call(apiConfig.meetupsRecommendeds, {
      id: 1
    });
    yield put(
      MeetupsActions.meetupsRecommendedSuccess(meetupsRecommendeds.data)
    );
  } catch (err) {
    yield put({
      type: "MEETUP_SUBSCRIPTION_FAILURE",
      payload: { msgError: "Erro ao se inscrever no meetup!." }
    });
  }
}
function* loadMeetupsSigneds(action) {
  try {
    const response = yield call(apiConfig.meetupsSigneds, action.params);
    yield put(MeetupsActions.meetupsSignedsSuccess(response.data));
  } catch (err) {
    yield put({
      type: "MEETUPS_SIGNEDS_FAILURE",
      payload: { msgError: "Erro ao listar os meetups" }
    });
  }
}
function* loadMeetupsUnsigneds(action) {
  try {
    const response = yield call(apiConfig.meetupsUnsigneds, action.params);
    yield put(MeetupsActions.meetupsUnsignedsSuccess(response.data));
  } catch (err) {
    yield put({
      type: "MEETUPS_UNSIGNEDS_FAILURE",
      payload: { msgError: "Erro ao listar os meetups" }
    });
  }
}
function* loadMeetupsRecommededs(action) {
  try {
    const response = yield call(apiConfig.meetupsRecommendeds, action.params);
    yield put(MeetupsActions.meetupsRecommendedSuccess(response.data));
  } catch (err) {
    yield put({
      type: "MEETUPS_RECOMMENDEDS_FAILURE",
      payload: { msgError: "Erro ao listar os meetups" }
    });
  }
}
function* loadPreferences() {
  try {
    const response = yield call(apiConfig.preferences);

    yield put(PreferencesActions.preferencesSuccess(response.data));
  } catch (err) {
    yield put({
      type: "PREFERENCES_FAILURE",
      payload: { msgError: "Erro ao listar as preferências!." }
    });
  }
}
function* loadMeetupsFilter(action) {
  try {
    const response = yield call(apiConfig.meetupsFilter, action.params);
    yield put(MeetupsActions.meetupsFilterSuccess(response.data));
  } catch (err) {
    yield put({
      type: "MEETUPS_RECOMMENDEDS_FAILURE",
      payload: { msgError: "Erro ao listar os meetups" }
    });
  }
}

export default function* sagaRoot() {
  yield all([
    takeLatest(ProfileTypes.LOGIN_REQUEST, login),
    takeLatest(ProfileTypes.SIGNUP_REQUEST, signUp),
    takeLatest(ProfileTypes.PROFILE_CREATE_REQUEST, profileCreate),
    takeLatest(ProfileTypes.PROFILE_SHOW_REQUEST, profileShow),
    takeLatest(ProfileTypes.PROFILE_UPDATE_REQUEST, profileUpdate),

    takeLatest(MeetupsTypes.MEETUPS_SIGNEDS_REQUEST, loadMeetupsSigneds),
    takeLatest(MeetupsTypes.MEETUPS_UNSIGNEDS_REQUEST, loadMeetupsUnsigneds),
    takeLatest(
      MeetupsTypes.MEETUPS_RECOMMENDEDS_REQUEST,
      loadMeetupsRecommededs
    ),
    takeLatest(MeetupsTypes.MEETUPS_FILTER_REQUEST, loadMeetupsFilter),

    takeLatest(PreferencesTypes.PREFERENCES_REQUEST, loadPreferences),

    takeLatest(MeetupTypes.MEETUP_SHOW_REQUEST, meetupShow),
    takeLatest(MeetupTypes.MEETUP_SUBSCRIPTION_REQUEST, meetupSubscription),
    takeLatest(MeetupTypes.MEETUP_CREATE_REQUEST, meetupCreate),
    takeLatest(MeetupTypes.FILE_UPLOAD_REQUEST, fileCreate)
  ]);
}
