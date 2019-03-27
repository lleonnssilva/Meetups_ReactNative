export const Types = {
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',
};

const INITIAL_STATE = {
  username: null,
  email: null,
  password: null,
  password_confirmation: null,
  loading: false,
  error: false,
};

export default function signUp(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGNUP_REQUEST:
      return { ...state, loading: true };
    case Types.SIGNUP_SUCCESS:
      return {
        state: action.data,
        loading: false,
        error: false,
      };
    case Types.SIGNUP_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export const Creators = {
  signUpRequest: params => ({
    type: Types.SIGNUP_REQUEST,
    params,
  }),
  signUpSuccess: (username, email, password, password_confirmation) => ({
    type: Types.SIGNUP_SUCCESS,
    payload: {
      username,
      email,
      password,
      password_confirmation,
    },
  }),
  signUpFailure: error => ({
    type: Types.SIGNUP_FAILURE,
    error,
  }),

  profileRequest: params => ({
    type: Types.PROFILE_REQUEST,
    params,
  }),
  profileSuccess: () => ({
    type: Types.PROFILE_SUCCESS,
  }),
  profileFailure: error => ({
    type: Types.PROFILE_FAILURE,
    error,
  }),
};
