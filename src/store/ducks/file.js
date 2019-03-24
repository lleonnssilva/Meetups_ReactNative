export const Types = {
  FILE_UPLOAD_REQUEST: 'FILE_UPLOAD_REQUEST',
  FILE_UPLOAD_SUCCESS: 'FILE_UPLOAD_SUCCESS',
  FILE_UPLOAD_FAILURE: 'FILE_UPLOAD_FAILURE',
};

const INITIAL_STATE = {
  fileupload: {},
  loading: false,
  error: false,
};

export default function file(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FILE_UPLOAD_REQUEST:
      return { ...state, loading: true };
    case Types.FILE_UPLOAD_SUCCESS:
      return {
        ...state,
        fileupload: action.payload.fileupload,
        loading: false,
        error: false,
      };
    case Types.FILE_UPLOAD_FAILURE:
      return { loading: false, error: true };
    default:
      return state;
  }
}

export const Creators = {
  fileuploadRequest: () => ({
    type: Types.FILE_UPLOAD_REQUEST,
  }),
  fileuploadSuccess: fileupload => ({
    type: Types.FILE_UPLOAD_SUCCESS,
    payload: {
      fileupload,
    },
  }),
  fileuploadFailure: error => ({
    type: Types.FILE_UPLOAD_FAILURE,
    error,
  }),
};
