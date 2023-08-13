import { createAction } from "@reduxjs/toolkit";

export const actionTypes = {
  LOGIN_USER: "LOGIN_USER",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_FAILURE: "LOGIN_USER_FAILURE",
  LOGOUT_USER: "LOGOUT",
  LOGOUT_USER_SUCCESS: "LOGOUT_USER_SUCCESS",
  LOGOUT_USER_FAILURE: "LOGOUT_USER_FAILURE",
  SET_IS_LOADING: "SET_IS_LOADING",
  REGISTER_USER: "REGISTER_USER",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAILURE: "REGISTER_USER_FAILURE",
};
export const loginUser = createAction(actionTypes.LOGIN_USER, (data) => ({
  payload: data,
}));
export const loginUserSuccess = createAction(
  actionTypes.LOGIN_USER_SUCCESS,
  (data) => ({
    payload: data,
  })
);
export const loginUserFailure = createAction(actionTypes.LOGIN_USER_FAILURE);
export const logoutUser = createAction(actionTypes.LOGOUT_USER, (data) => ({
  payload: data,
}));
export const logoutUserSuccess = createAction(actionTypes.LOGOUT_USER_SUCCESS);
export const logoutUserFailure = createAction(actionTypes.LOGOUT_USER_FAILURE);
export const registerUser = createAction(actionTypes.REGISTER_USER, (data) => ({
  payload: data,
}));
export const registerUserSuccess = createAction(
  actionTypes.REGISTER_USER_SUCCESS
);
export const registerUserFailure = createAction(
  actionTypes.REGISTER_USER_FAILURE
);
