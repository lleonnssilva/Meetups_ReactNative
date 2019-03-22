export const Types = {
  MEETUP_SHOW_REQUEST: 'MEETUPE_SHOW_REQUEST',
  MEETUP_SHOW_SUCESS: 'MEETUP_SHOW_SUCESS',
  MEETUP_SHOW_FAILURE: 'MEETUP_SHOW_FAILURE',

  MEETUP_CREATE_REQUEST: 'MEETUP_CREATE_REQUEST',
  MEETUP_CREATE_SUCCESS: 'MEETUP_CREATE_SUCCESS',
  MEETUP_CREATE_FAILURE: 'MEETUP_CREATE_FAILURE',

  MEETUP_SUBSCRIPTION_REQUEST: 'MEETUP_SUBSCRIPTION_REQUEST',
  MEETUP_SUBSCRIPTION_SUCCESS: 'MEETUP_SUBSCRIPTION_SUCCESS',
  MEETUP_SUBSCRIPTION_FAILURE: 'MEETUP_SUBSCRIPTION_FAILURE',
};

const INITIAL_STATE = {
  meetup: null,
  loading: false,
  error: false,
};

export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MEETUP_SHOW_REQUEST:
      return { ...state, loading: true };
    case Types.MEETUP_SHOW_SUCESS:
      return {
        ...state,
        meetup: action.payload.meetup,
        registered: action.payload.registered,
        loading: false,
        error: false,
      };
    case Types.MEETUP_SHOW_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.MEETUP_SUBSCRIPTION_REQUEST:
      return { ...state, loading: true };
    case Types.MEETUP_SUBSCRIPTION_SUCCESS:
      return {
        meetup: action.payload.meetup,
        registered: action.payload.registered,
        loading: false,
        error: false,
      };
    case Types.MEETUP_SUBSCRIPTION_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.MEETUP_CREATE_REQUEST:
      return { ...state, loading: true };
    case Types.MEETUP_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case Types.MEETUP_CREATE_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export const Creators = {
  meetupShowRequest: params => ({
    type: Types.MEETUP_SHOW_REQUEST,
    params,
  }),
  meetupShowSuccess: meetup => ({
    type: Types.MEETUP_SHOW_SUCESS,
    payload: {
      meetup: meetup.meetup,
      registered: meetup.registered,
    },
  }),
  meetupShowFailure: error => ({
    type: Types.MEETUP_SHOW_FAILURE,
    error,
  }),

  meetupCreateRequest: params => ({
    type: Types.MEETUP_CREATE_REQUEST,
    params,
  }),
  meetupCreateSuccess: () => ({
    type: Types.MEETUP_CREATE_SUCCESS,
    error: null,
    loading: false,
  }),
  meetupCreateFailure: error => ({
    type: Types.MEETUP_CREATE_FAILURE,
    error,
  }),
  meetupSubscriptionRequest: params => ({
    type: Types.MEETUP_SUBSCRIPTION_REQUEST,
    params,
    loading: true,
  }),
  meetupSubscriptionSuccess: meetup => ({
    type: Types.MEETUP_SUBSCRIPTION_SUCCESS,
    payload: {
      meetup: meetup.meetup,
      registered: meetup.registered,
    },
    error: null,
    loading: false,
  }),
  meetupSubscriptionFailure: error => ({
    type: Types.MEETUP_SUBSCRIPTION_FAILURE,
    error,
    loading: false,
  }),
};
