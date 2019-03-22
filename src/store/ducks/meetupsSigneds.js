export const Types = {
  MEETUPS_SIGNEDS_REQUEST: 'MEETUPS_SIGNEDS_REQUEST',
  MEETUPS_SIGNEDS_SUCCESS: 'MEETUPS_SIGNEDS_SUCCESS',
  MEETUPS_SIGNEDS_FAILURE: 'MEETUPS_SIGNEDS_FAILURE',
};

const INITIAL_STATE = {
  signeds: [],
  loading: false,
  error: false,
};

export default function meetupsSigneds(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MEETUPS_SIGNEDS_REQUEST:
      return { ...state, loading: true };
    case Types.MEETUPS_SIGNEDS_SUCCESS:
      return {
        ...state,
        signeds: action.payload.signeds,
        loading: false,
        error: false,
      };
    case Types.MEETUPS_SIGNEDS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
export const Creators = {
  meetupsSignedsRequest: () => ({
    type: Types.MEETUPS_SIGNEDS_REQUEST,
  }),
  meetupsSignedsSuccess: signeds => ({
    type: Types.MEETUPS_SIGNEDS_SUCCESS,
    payload: {
      signeds,
    },
  }),
  meetupsSignedsFailure: () => ({
    type: Types.MEETUPS_SIGNEDS_FAILURE,
  }),
};
