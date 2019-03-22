export const Types = {
  MEETUPS_RECOMMENDEDS_REQUEST: 'MEETUPS_RECOMMENDEDS_REQUEST',
  MEETUPS_RECOMMENDEDS_SUCCESS: 'MEETUPS_RECOMMENDEDS_SUCCESS',
  MEETUPS_RECOMMENDEDS_FAILURE: 'MEETUPS_RECOMMENDEDS_FAILURE',
};

const INITIAL_STATE = {
  recommendeds: [],
  loading: false,
  error: false,
};

export default function meetupsRecommendeds(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MEETUPS_RECOMMENDEDS_REQUEST:
      return { ...state, loading: true };
    case Types.MEETUPS_RECOMMENDEDS_SUCCESS:
      return {
        ...state,
        recommendeds: action.payload.recommendeds,
        loading: false,
        error: false,
      };
    case Types.MEETUPS_RECOMMENDEDS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export const Creators = {
  meetupsRecommendedsRequest: () => ({
    type: Types.MEETUPS_RECOMMENDEDS_REQUEST,
  }),
  meetupsRecommendedSuccess: recommendeds => ({
    type: Types.MEETUPS_RECOMMENDEDS_SUCCESS,
    payload: {
      recommendeds,
    },
  }),
  meetupsRecommendedsFailure: () => ({
    type: Types.MEETUPS_RECOMMENDEDS_FAILURE,
  }),
};
