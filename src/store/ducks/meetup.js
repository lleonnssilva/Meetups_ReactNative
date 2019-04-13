export const Types = {
  FILE_UPLOAD_REQUEST: "FILE_UPLOAD_REQUEST",
  FILE_UPLOAD_SUCCESS: "FILE_UPLOAD_SUCCESS",
  FILE_UPLOAD_FAILURE: "FILE_UPLOAD_FAILURE",

  MEETUP_SHOW_REQUEST: "MEETUPE_SHOW_REQUEST",
  MEETUP_SHOW_SUCESS: "MEETUP_SHOW_SUCESS",
  MEETUP_SHOW_FAILURE: "MEETUP_SHOW_FAILURE",

  MEETUP_CREATE_REQUEST: "MEETUP_CREATE_REQUEST",
  MEETUP_CREATE_SUCCESS: "MEETUP_CREATE_SUCCESS",
  MEETUP_CREATE_FAILURE: "MEETUP_CREATE_FAILURE",

  MEETUP_SUBSCRIPTION_REQUEST: "MEETUP_SUBSCRIPTION_REQUEST",
  MEETUP_SUBSCRIPTION_SUCCESS: "MEETUP_SUBSCRIPTION_SUCCESS",
  MEETUP_SUBSCRIPTION_FAILURE: "MEETUP_SUBSCRIPTION_FAILURE"
};

const INITIAL_STATE = {
  fileupload: {},
  meetup: null,
  loading: false,
  error: false,
  registered: false,
  msgError: ""
};

export default function meetups(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MEETUP_SHOW_REQUEST:
      return { ...state, loading: true, msgError: "" };
    case Types.MEETUP_SHOW_SUCESS:
      return {
        ...state,
        meetup: action.payload.meetup,
        registered: action.payload.registered,
        loading: false,
        error: false,
        msgError: ""
      };
    case Types.MEETUP_SHOW_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        msgError: action.payload.msgError
      };
    case Types.MEETUP_SUBSCRIPTION_REQUEST:
      return { ...state, loading: true, msgError: "" };
    case Types.MEETUP_SUBSCRIPTION_SUCCESS:
      return {
        meetup: action.payload.meetup,
        registered: action.payload.registered,
        loading: false,
        error: false,
        msgError: ""
      };
    case Types.MEETUP_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        msgError: action.payload.msgError
      };
    case Types.MEETUP_CREATE_REQUEST:
      return { ...state, loading: true, msgError: "" };
    case Types.MEETUP_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        msgError: ""
      };
    case Types.MEETUP_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        msgError: action.payload.msgError
      };
    case Types.FILE_UPLOAD_REQUEST:
      return { ...state, loading: true, msgError: "" };
    case Types.FILE_UPLOAD_SUCCESS:
      return {
        ...state,
        fileupload: action.payload.fileupload,
        loading: false,
        error: false,
        msgError: ""
      };
    case Types.FILE_UPLOAD_FAILURE:
      return {
        loading: false,
        error: true,
        msgError: action.payload.msgError
      };
    default:
      return state;
  }
}

export const Creators = {
  meetupShowRequest: params => ({
    type: Types.MEETUP_SHOW_REQUEST,
    params
  }),
  meetupShowSuccess: meetup => ({
    type: Types.MEETUP_SHOW_SUCESS,
    payload: {
      meetup: meetup.meetup,
      registered: meetup.registered
    }
  }),
  meetupShowFailure: error => ({
    type: Types.MEETUP_SHOW_FAILURE,
    error
  }),

  meetupCreateRequest: params => ({
    type: Types.MEETUP_CREATE_REQUEST,
    params
  }),
  meetupCreateSuccess: () => ({
    type: Types.MEETUP_CREATE_SUCCESS,
    error: null,
    loading: false
  }),
  meetupCreateFailure: error => ({
    type: Types.MEETUP_CREATE_FAILURE,
    error
  }),
  meetupSubscriptionRequest: params => ({
    type: Types.MEETUP_SUBSCRIPTION_REQUEST,
    params,
    loading: true
  }),
  meetupSubscriptionSuccess: meetup => ({
    type: Types.MEETUP_SUBSCRIPTION_SUCCESS,
    payload: {
      meetup: meetup.meetup,
      registered: meetup.registered
    },
    error: null,
    loading: false
  }),
  meetupSubscriptionFailure: error => ({
    type: Types.MEETUP_SUBSCRIPTION_FAILURE,
    error,
    loading: false
  }),
  fileuploadRequest: () => ({
    type: Types.FILE_UPLOAD_REQUEST
  }),
  fileuploadSuccess: fileupload => ({
    type: Types.FILE_UPLOAD_SUCCESS,
    payload: {
      fileupload
    }
  }),
  fileuploadFailure: error => ({
    type: Types.FILE_UPLOAD_FAILURE,
    error
  })
};
