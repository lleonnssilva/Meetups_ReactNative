export const Types = {
  MEETUPS_UNSIGNEDS_REQUEST: 'MEETUPS_UNSIGNEDS_REQUEST',
  MEETUPS_UNSIGNEDS_SUCCESS: 'MEETUPS_UNSIGNEDS_SUCCESS',
  MEETUPS_UNSIGNEDS_FAILURE: 'MEETUPS_UNSIGNEDS_FAILURE',
};
const INITIAL_STATE = {
  unsigneds: [],
  loading: false,
  error: false,
};

export default function meetupsUnsigneds(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MEETUPS_UNSIGNEDS_REQUEST:
      return { ...state, loading: true };
    case Types.MEETUPS_UNSIGNEDS_SUCCESS:
      return {
        unsigneds: action.payload.unsigneds,
        loading: false,
        error: false,
      };
    case Types.MEETUPS_UNSIGNEDS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export const Creators = {
  meetupsUnsignedsRequest: () => ({
    type: Types.MEETUPS_UNSIGNEDS_REQUEST,
  }),
  meetupsUnsignedsSuccess: unsigneds => ({
    type: Types.MEETUPS_UNSIGNEDS_SUCCESS,
    payload: {
      unsigneds,
    },
  }),
  meetupsUnsignedsFailure: () => ({
    type: Types.MEETUPS_UNSIGNEDS_FAILURE,
  }),
};
