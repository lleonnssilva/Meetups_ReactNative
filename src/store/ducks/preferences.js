export const Types = {
  PREFERENCES_REQUEST: "PREFERENCES_REQUEST",
  PREFERENCES_SUCCESS: "PREFERENCES_SUCCESS",
  PREFERENCES_FAILURE: "PREFERENCES_FAILURE"
};

const INITIAL_STATE = {
  preferences: [],
  loading: false,
  error: false,
  msgError: ""
};

export default function preference(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PREFERENCES_REQUEST:
      return { ...state, loading: true, msgError: "" };
    case Types.PREFERENCES_SUCCESS:
      return {
        ...state,
        preferences: action.payload.preferences,
        loading: false,
        error: false,
        msgError: ""
      };
    case Types.PREFERENCES_FAILURE:
      return { loading: false, error: true, msgError: action.payload.msgError };
    default:
      return state;
  }
}

export const Creators = {
  preferencesRequest: () => ({
    type: Types.PREFERENCES_REQUEST
  }),
  preferencesSuccess: preferences => ({
    type: Types.PREFERENCES_SUCCESS,
    payload: {
      preferences
    }
  }),
  preferencesFailure: error => ({
    type: Types.PREFERENCES_FAILURE,
    error
  })
};
