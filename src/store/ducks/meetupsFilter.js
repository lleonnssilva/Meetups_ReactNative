export const Types = {
  MEETUPS_FILTER_REQUEST: 'MEETUPS_FILTER_REQUEST',
  MEETUPS_FILTER_SUCCESS: 'MEETUPS_FILTER_SUCCESS',
  MEETUPS_FILTER_FAILURE: 'MEETUPS_FILTER_FAILURE',
};

const INITIAL_STATE = {
  meetups: [],
  loading: false,
  error: false,
};

export default function meetupsFilter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MEETUPS_FILTER_REQUEST:
      return { ...state, loading: true };
    case Types.MEETUPS_FILTER_SUCCESS:
      return {
        meetups: action.payload.meetups,
        loading: false,
        error: false,
      };
    case Types.MEETUPS_FILTER_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
export const Creators = {
  meetupsFilterRequest: params => ({
    type: Types.MEETUPS_FILTER_REQUEST,
    params,
  }),
  meetupsFilterSuccess: meetups => ({
    type: Types.MEETUPS_FILTER_SUCCESS,
    payload: {
      meetups,
      loading: false,
    },
  }),
  meetupsFilterFailure: () => ({
    type: Types.MEETUPS_FILTER_FAILURE,
  }),
};
