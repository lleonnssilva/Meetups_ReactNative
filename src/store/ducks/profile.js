export const Types = {
  PROFILE_SHOW_REQUEST: "PROFILE_SHOW_REQUEST",
  PROFILE_SHOW_SUCESS: "PROFILE_SHOW_SUCESS",
  PROFILE_SHOW_FAILURE: "PROFILE_SHOW_FAILURE",

  PROFILE_UPDATE_REQUEST: "PROFILE_UPDATE_REQUEST",
  PROFILE_UPDATE_SUCCESS: "PROFILE_UPDATE_SUCCESS",
  PROFILE_UPDATE_FAILURE: "PROFILE_UPDATE_FAILURE",

  PROFILE_CREATE_REQUEST: "PROFILE_CREATE_REQUEST",
  PROFILE_CREATE_SUCCESS: "PROFILE_CREATE_SUCCESS",
  PROFILE_CREATE_FAILURE: "PROFILE_CREATE_FAILURE",

  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",

  SIGNUP_REQUEST: "SIGNUP_REQUEST",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  SIGNUP_FAILURE: "SIGNUP_FAILURE"
};

const INITIAL_STATE = {
  userProfile: null,
  loading: false,
  error: false,
  msgError: ""
};

export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PROFILE_SHOW_REQUEST:
      return { ...state, loading: true, msgError: "" };
    case Types.PROFILE_SHOW_SUCESS:
      console.tron.log(action.payload.userProfile);
      return {
        ...state,
        userProfile: action.payload.userProfile,
        loading: false,
        error: false,
        msgError: ""
      };
    case Types.PROFILE_SHOW_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        msgError: action.payload.msgError
      };

    case Types.PROFILE_UPDATE_REQUEST:
      return { ...state, loading: true, msgError: "" };
    case Types.PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        msgError: ""
      };
    case Types.PROFILE_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        msgError: action.payload.msgError
      };
    case Types.PROFILE_CREATE_REQUEST:
      return { ...state, loading: true, msgError: "" };
    case Types.PROFILE_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        msgError: ""
      };
    case Types.PROFILE_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        msgError: action.payload.msgError
      };
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true, error: false, msgError: "" };
    case Types.LOGIN_SUCCESS:
      return {
        state: action.data,
        loading: false,
        error: false,
        msgError: ""
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        msgError: action.payload.msgError
      };
    case Types.SIGNUP_REQUEST:
      return { ...state, loading: true, msgError: "" };
    case Types.SIGNUP_SUCCESS:
      return {
        state: action.data,
        loading: false,
        error: false,
        msgError: ""
      };
    case Types.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        msgError: action.payload.msgError
      };
    default:
      return state;
  }
}

export const Creators = {
  profileShowRequest: () => ({
    type: Types.PROFILE_SHOW_REQUEST
  }),
  profileShowSuccess: userProfile => ({
    type: Types.PROFILE_SHOW_SUCESS,
    payload: {
      userProfile
    }
  }),
  profileShowFailure: () => ({
    type: Types.PROFILE_SHOW_FAILURE,
    error: true
  }),

  profileUpdateRequest: params => ({
    type: Types.PROFILE_UPDATE_REQUEST,
    params
  }),
  profileUpdateSuccess: () => ({
    type: Types.PROFILE_UPDATE_SUCCESS,
    payload: {
      error: true,
      loading: false
    }
  }),
  profileUpdateFailure: msg => ({
    type: Types.PROFILE_UPDATE_FAILURE,
    error: true
  }),
  profileCreateRequest: params => ({
    type: Types.PROFILE_CREATE_REQUEST,
    params
  }),
  profileCreateSuccess: () => ({
    type: Types.PROFILE_CREATE_SUCCESS,
    error: false,
    loading: false
  }),
  profileCreateFailure: error => ({
    type: Types.PROFILE_CREATE_FAILURE,
    error
  }),
  loginRequest: params => ({
    type: Types.LOGIN_REQUEST,
    params
  }),
  loginSuccess: () => ({
    type: Types.LOGIN_SUCCESS
  }),
  loginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    error
  }),
  signUpRequest: params => ({
    type: Types.SIGNUP_REQUEST,
    params
  }),
  signUpSuccess: () => ({
    type: Types.SIGNUP_SUCCESS
  }),
  signUpFailure: error => ({
    type: Types.SIGNUP_FAILURE,
    error
  }),

  profileRequest: params => ({
    type: Types.PROFILE_REQUEST,
    params
  }),
  profileSuccess: () => ({
    type: Types.PROFILE_SUCCESS
  }),
  profileFailure: error => ({
    type: Types.PROFILE_FAILURE,
    error
  })
};
