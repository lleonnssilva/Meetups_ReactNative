export const Types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};

const INITIAL_STATE = {
  username: null,
  email: null,
  password: null,
  loading: false,
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true, error: false };
    case Types.LOGIN_SUCCESS:
      return {
        state: action.data,
        loading: false,
        error: false,
      };
    case Types.LOGIN_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: params => ({
    type: Types.LOGIN_REQUEST,
    params,
  }),
  loginSuccess: (email, password) => ({
    type: Types.LOGIN_SUCCESS,
    payload: {
      email,
      password,
    },
  }),
  loginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    error,
  }),
};
