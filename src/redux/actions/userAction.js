import * as ACTION_TYPES from "../actionType";

export const createUserRequestAction = () => {
  return {
    type: ACTION_TYPES.CREATE_USER_REQUEST
  };
};

export const createUserSuccessAction = () => {
  return {
    type: ACTION_TYPES.CREATE_USER_SUCCESS
  };
};

export const createUserFailureAction = () => {
  return {
    type: ACTION_TYPES.CREATE_USER_FAILURE
  };
};

export const deleteUserRequestAction = () => {
  return {
    type: ACTION_TYPES.DELETE_USER_REQUEST
  };
};

export const deleteUserSuccessAction = payload => {
  return {
    type: ACTION_TYPES.DELETE_USER_SUCCESS,
    payload
  };
};

export const deleteUserFailureAction = error => {
  return {
    type: ACTION_TYPES.DELETE_USER_FAILURE,
    error
  };
};

export const updateUserRequestAction = () => {
  return {
    type: ACTION_TYPES.UPDATE_USER_REQUEST
  };
};

export const updateUserSuccessAction = payload => {
  return {
    type: ACTION_TYPES.UPDATE_USER_SUCCESS,
    payload
  };
};

export const updateUserFailureAction = error => {
  return {
    type: ACTION_TYPES.UPDATE_USER_FAILURE,
    error
  };
};

export const getUserRequestAction = () => {
  return {
    type: ACTION_TYPES.GET_USER_REQUEST
  };
};

export const getUserSuccessAction = payload => {
  return {
    type: ACTION_TYPES.GET_USER_SUCCESS,
    payload
  };
};

export const getUserFailureAction = error => {
  return {
    type: ACTION_TYPES.GET_USER_FAILURE,
    error
  };
};
