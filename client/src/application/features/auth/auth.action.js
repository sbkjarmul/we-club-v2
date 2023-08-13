import { createAction } from "@reduxjs/toolkit";

export const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SET_IS_LOADING: "SET_IS_LOADING",
  REGISTER_USER: "REGISTER_USER",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAILURE: "REGISTER_USER_FAILURE",
};

export const setIsLoading = (isLoading) =>
  createAction(actionTypes.SET_IS_LOADING, isLoading);
export const login = () => createAction(actionTypes.LOGIN);
export const logout = () => createAction(actionTypes.LOGOUT);
export const registerUser = () => createAction(actionTypes.REGISTER_USER);
export const registerUserSuccess = () =>
  createAction(actionTypes.REGISTER_USER_SUCCESS);
export const registerUserFailure = () =>
  createAction(actionTypes.REGISTER_USER_FAILURE);
