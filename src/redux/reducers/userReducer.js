import * as ACTION_TYPES from "../actionType";

const initialState = {
  loading: false,
  errors: null,
  message: "",
  users: [],
  user: {}
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER_REQUEST:
      return { ...state, loading: true };
    case ACTION_TYPES.CREATE_USER_SUCCESS:
      return { ...state, message: "User Added Successfully", loading: false };
    case ACTION_TYPES.CREATE_USER_FAILURE:
      return { ...state, message: "Something went wrong" };
    case ACTION_TYPES.DELETE_USER_REQUEST:
      return { ...state };
    case ACTION_TYPES.DELETE_USER_SUCCESS:
      return { ...state, message: "User Deleted Successfully" };
    case ACTION_TYPES.DELETE_USER_FAILURE:
      return { ...state, message: action.payload };
    case ACTION_TYPES.UPDATE_USER_REQUEST:
      return { ...state };
    case ACTION_TYPES.UPDATE_USER_SUCCESS:
      return { ...state };
    case ACTION_TYPES.UPDATE_USER_FAILURE:
      return { ...state };
    case ACTION_TYPES.GET_USER_REQUEST:
      return { ...state };
    case ACTION_TYPES.GET_USER_SUCCESS:
      return { ...state };
    case ACTION_TYPES.GET_USER_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
