import { createAction } from "@reduxjs/toolkit";
import { createActionWithPayload } from "@/application/helpers";

export const actionTypes = {
  LOGIN_USER: "LOGIN_USER",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_FAILURE: "LOGIN_USER_FAILURE",
  LOGOUT_USER: "LOGOUT",
  LOGOUT_USER_SUCCESS: "LOGOUT_USER_SUCCESS",
  LOGOUT_USER_FAILURE: "LOGOUT_USER_FAILURE",
  SET_LOADER: "SET_LOADER",
  REGISTER_USER: "REGISTER_USER",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAILURE: "REGISTER_USER_FAILURE",
};

export const setLoader = createActionWithPayload(actionTypes.SET_LOADER);
export const loginUser = createActionWithPayload(actionTypes.LOGIN_USER);
export const loginUserSuccess = createActionWithPayload(
  actionTypes.LOGIN_USER_SUCCESS
);
export const loginUserFailure = createAction(actionTypes.LOGIN_USER_FAILURE);
export const logoutUser = createActionWithPayload(actionTypes.LOGOUT_USER);
export const logoutUserSuccess = createAction(actionTypes.LOGOUT_USER_SUCCESS);
export const logoutUserFailure = createAction(actionTypes.LOGOUT_USER_FAILURE);
export const registerUser = createActionWithPayload(actionTypes.REGISTER_USER);
export const registerUserSuccess = createAction(
  actionTypes.REGISTER_USER_SUCCESS
);
export const registerUserFailure = createAction(
  actionTypes.REGISTER_USER_FAILURE
);
