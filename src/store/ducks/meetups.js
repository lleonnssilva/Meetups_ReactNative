export const Types = {
  MEETUPS_UNSIGNEDS_REQUEST: "MEETUPS_UNSIGNEDS_REQUEST",
  MEETUPS_UNSIGNEDS_SUCCESS: "MEETUPS_UNSIGNEDS_SUCCESS",
  MEETUPS_UNSIGNEDS_FAILURE: "MEETUPS_UNSIGNEDS_FAILURE",

  MEETUPS_FILTER_REQUEST: "MEETUPS_FILTER_REQUEST",
  MEETUPS_FILTER_SUCCESS: "MEETUPS_FILTER_SUCCESS",
  MEETUPS_FILTER_FAILURE: "MEETUPS_FILTER_FAILURE",

  MEETUPS_RECOMMENDEDS_REQUEST: "MEETUPS_RECOMMENDEDS_REQUEST",
  MEETUPS_RECOMMENDEDS_SUCCESS: "MEETUPS_RECOMMENDEDS_SUCCESS",
  MEETUPS_RECOMMENDEDS_FAILURE: "MEETUPS_RECOMMENDEDS_FAILURE",

  MEETUPS_SIGNEDS_REQUEST: "MEETUPS_SIGNEDS_REQUEST",
  MEETUPS_SIGNEDS_SUCCESS: "MEETUPS_SIGNEDS_SUCCESS",
  MEETUPS_SIGNEDS_FAILURE: "MEETUPS_SIGNEDS_FAILURE"
};

const INITIAL_STATE = {
  recommendeds: [],
  signeds: [],
  filters: [],
  unsigneds: [],

  loading: false,
  error: false,
  msgError: "",

  unsignedsPage: 1,
  signedsPage: 1,
  recommendedsPage: 1,
  filterPage: 1,

  unsignedsLastPage: 1,
  signedsLastPage: 1,
  recommendedsLastPage: 1,
  filterLastPage: 1
};
export default function meetups(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MEETUPS_UNSIGNEDS_REQUEST:
      return { ...state, loading: true };
    case Types.MEETUPS_UNSIGNEDS_SUCCESS:
      return {
        ...state,
        unsigneds:
          action.payload.unsigneds.page === 1
            ? action.payload.unsigneds.data
            : [...state.unsigneds, ...action.payload.unsigneds.data],
        unsignedsLastPage: action.payload.unsigneds.lastPage,
        unsignedsPage: action.payload.unsigneds.page,
        loading: false,
        error: false
      };
    case Types.MEETUPS_UNSIGNEDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        msgError: action.payload.msgError
      };
    case Types.MEETUPS_FILTER_REQUEST:
      return { ...state, loading: true };
    case Types.MEETUPS_FILTER_SUCCESS:
      return {
        ...state,
        filters:
          action.payload.filters.page === 1
            ? action.payload.filters.data
            : [...state.filters, ...action.payload.filters.data],
        filterLastPage: action.payload.filters.lastPage,
        filterPage: action.payload.filters.page,
        loading: false,
        error: false
      };
    case Types.MEETUPS_FILTER_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.MEETUPS_RECOMMENDEDS_REQUEST:
      return { ...state, loading: true };
    case Types.MEETUPS_RECOMMENDEDS_SUCCESS:
      return {
        ...state,
        recommendeds:
          action.payload.recommendeds.page === 1
            ? action.payload.recommendeds.data
            : [...state.recommendeds, ...action.payload.recommendeds.data],
        recommendedsLastPage: action.payload.recommendeds.lastPage,
        recommendedsPage: action.payload.recommendeds.page,
        loading: false,
        error: false
      };
    case Types.MEETUPS_RECOMMENDEDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        msgError: action.payload.msgError
      };
    case Types.MEETUPS_SIGNEDS_REQUEST:
      return { ...state, loading: true };
    case Types.MEETUPS_SIGNEDS_SUCCESS:
      return {
        ...state,
        signeds:
          action.payload.signeds.page === 1
            ? action.payload.signeds.data
            : [...state.signeds, ...action.payload.signeds.data],
        signedsLastPage: action.payload.signeds.lastPage,
        signedsPage: action.payload.signeds.page,
        loading: false,
        error: false
      };
    case Types.MEETUPS_SIGNEDS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
export const Creators = {
  meetupsUnsignedsRequest: params => ({
    type: Types.MEETUPS_UNSIGNEDS_REQUEST,
    params
  }),
  meetupsUnsignedsSuccess: unsigneds => ({
    type: Types.MEETUPS_UNSIGNEDS_SUCCESS,
    payload: {
      unsigneds
    }
  }),
  // meetupsUnsignedsFailure: msgError => ({
  //   type: Types.MEETUPS_UNSIGNEDS_FAILURE,
  //   payload: {
  //     msgError: msgError
  //   }
  // }),
  meetupsFilterRequest: params => ({
    type: Types.MEETUPS_FILTER_REQUEST,
    params
  }),
  meetupsFilterSuccess: filters => ({
    type: Types.MEETUPS_FILTER_SUCCESS,
    payload: {
      filters
    }
  }),
  meetupsFilterFailure: () => ({
    type: Types.MEETUPS_FILTER_FAILURE
  }),
  meetupsRecommendedsRequest: params => ({
    type: Types.MEETUPS_RECOMMENDEDS_REQUEST,
    params
  }),
  meetupsRecommendedSuccess: recommendeds => ({
    type: Types.MEETUPS_RECOMMENDEDS_SUCCESS,
    payload: {
      recommendeds
    }
  }),
  meetupsRecommendedsFailure: () => ({
    type: Types.MEETUPS_RECOMMENDEDS_FAILURE
  }),
  meetupsSignedsRequest: params => ({
    type: Types.MEETUPS_SIGNEDS_REQUEST,
    params
  }),
  meetupsSignedsSuccess: signeds => ({
    type: Types.MEETUPS_SIGNEDS_SUCCESS,
    payload: {
      signeds
    }
  }),
  meetupsSignedsFailure: () => ({
    type: Types.MEETUPS_SIGNEDS_FAILURE
  })
};
