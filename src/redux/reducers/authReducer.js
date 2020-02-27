import * as ACTION_TYPES from "../actionType";

const initialState = {
  logined: false,
  errors: null,
  user: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_REQUEST:
      return { ...state };
    case ACTION_TYPES.LOGIN_SUCCESS:
      return { ...state, user: action.payload.user };
    case ACTION_TYPES.LOGIN_FAILURE:
      return { ...state, errors: action.error };
    case ACTION_TYPES.SIGN_UP_REQUEST:
      return { ...state };
    case ACTION_TYPES.SIGN_UP_SUCCESS:
      console.log(action.payload);
      return { ...state, user: action.payload.user };
    case ACTION_TYPES.SIGN_UP_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
