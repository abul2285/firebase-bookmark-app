import * as ACTION_TYPES from "../actionType";

export const signUpRequestAction = () => {
  return {
    type: ACTION_TYPES.SIGN_UP_REQUEST
  };
};

export const signUpSuccessAction = payload => {
  console.log(payload);
  return {
    type: ACTION_TYPES.SIGN_UP_SUCCESS,
    payload
  };
};

export const signUpFailureAction = error => {
  return {
    type: ACTION_TYPES.SIGN_UP_FAILURE,
    error
  };
};

// login action
export const loginRequestAction = () => {
  return {
    type: ACTION_TYPES.LOGIN_REQUEST
  };
};

export const loginSuccessAction = payload => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
    payload
  };
};

export const loginFailureAction = error => {
  return {
    type: ACTION_TYPES.LOGIN_FAILURE,
    error
  };
};
