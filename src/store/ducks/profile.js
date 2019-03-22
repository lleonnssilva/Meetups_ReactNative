export const Types = {
  PROFILE_SHOW_REQUEST: 'PROFILE_SHOW_REQUEST',
  PROFILE_SHOW_SUCESS: 'PROFILE_SHOW_SUCESS',
  PROFILE_SHOW_FAILURE: 'PROFILE_SHOW_FAILURE',

  PROFILE_UPDATE_REQUEST: 'PROFILE_UPDATE_REQUEST',
  PROFILE_UPDATE_SUCCESS: 'PROFILE_UPDATE_SUCCESS',
  PROFILE_UPDATE_FAILURE: 'PROFILE_UPDATE_FAILURE',

  PROFILE_CREATE_REQUEST: 'PROFILE_CREATE_REQUEST',
  PROFILE_CREATE_SUCCESS: 'PROFILE_CREATE_SUCCESS',
  PROFILE_CREATE_FAILURE: 'PROFILE_CREATE_FAILURE',
};

const INITIAL_STATE = {
  userProfile: null,
  loading: false,
  error: false,
};

export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PROFILE_SHOW_REQUEST:
      return { ...state, loading: true };
    case Types.PROFILE_SHOW_SUCESS:
      return {
        ...state,
        userProfile: action.payload.userProfile,
        loading: false,
        error: false,
      };
    case Types.PROFILE_SHOW_FAILURE:
      return { ...state, loading: false, error: true };

    case Types.PROFILE_UPDATE_REQUEST:
      return { ...state, loading: true };
    case Types.PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case Types.PROFILE_UPDATE_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.PROFILE_CREATE_REQUEST:
      return { ...state, loading: true };
    case Types.PROFILE_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case Types.PROFILE_CREATE_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export const Creators = {
  profileShowRequest: () => ({
    type: Types.PROFILE_SHOW_REQUEST,
  }),
  profileShowSuccess: userProfile => ({
    type: Types.PROFILE_SHOW_SUCESS,
    payload: {
      userProfile,
    },
  }),
  profileShowFailure: error => ({
    type: Types.PROFILE_SHOW_FAILURE,
    error,
  }),

  profileUpdateRequest: params => ({
    type: Types.PROFILE_UPDATE_REQUEST,
    params,
  }),
  profileUpdateSuccess: () => ({
    type: Types.PROFILE_UPDATE_SUCCESS,
    error: null,
    loading: false,
  }),
  profileUpdateFailure: error => ({
    type: Types.PROFILE_UPDATE_FAILURE,
    error,
  }),
  profileCreateRequest: params => ({
    type: Types.PROFILE_CREATE_REQUEST,
    params,
  }),
  profileCreateSuccess: () => ({
    type: Types.PROFILE_CREATE_SUCCESS,
    error: null,
    loading: false,
  }),
  profileCreateFailure: error => ({
    type: Types.PROFILE_CREATE_FAILURE,
    error,
  }),
};
