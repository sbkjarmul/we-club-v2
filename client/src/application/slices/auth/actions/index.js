import { createAction } from "@reduxjs/toolkit";
import { authApi } from "@/infrastructure/api";

// Action types
export const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SET_IS_LOADING: "SET_IS_LOADING",
  REGISTER: "REGISTER",
  REGISTER_FAILURE: "REGISTER_FAILURE",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
};

// Action types
export const setIsLoading = (isLoading) =>
  createAction(actionTypes.SET_IS_LOADING, isLoading);
export const login = () => createAction(actionTypes.LOGIN);
export const logout = () => createAction(actionTypes.LOGOUT);
export const registerUserRequest = () => createAction(actionTypes.REGISTER);
export const registerUserFailure = () =>
  createAction(actionTypes.REGISTER_FAILURE);
export const registerUserSuccess = () =>
  createAction(actionTypes.REGISTER_SUCCESS);

// Action creators
export const registerUser = (registerInfo) => async (dispatch) => {
  dispatch(registerUserRequest());

  const response = await authApi.register(registerInfo);

  if (response.status === 200) {
    dispatch(registerUserSuccess());
  } else {
    dispatch(registerUserFailure());
  }
};
