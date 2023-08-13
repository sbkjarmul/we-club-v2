import { createReducer } from "@reduxjs/toolkit";
import { actionTypes } from "./auth.action";
import { storageService } from "@/infrastructure/services";

const userInfo = storageService.read("userInfo");

const initialState = {
  isLoading: false,
  userInfo: userInfo,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionTypes.SET_LOADER, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(actionTypes.REGISTER_USER_SUCCESS, (state) => {
      state.isLoading = false;
    })
    .addCase(actionTypes.REGISTER_USER_FAILURE, (state) => {
      state.isLoading = false;
    })
    .addCase(actionTypes.LOGIN_USER_SUCCESS, (state, action) => {
      state.userInfo = action.payload;
      state.isLoading = false;
    })
    .addCase(actionTypes.LOGIN_USER_FAILURE, (state) => {
      state.isLoading = false;
    })
    .addCase(actionTypes.LOGOUT_USER_SUCCESS, (state) => {
      state.isLoading = false;
      state.userInfo = null;
    })
    .addCase(actionTypes.LOGOUT_USER_FAILURE, (state) => {
      state.isLoading = false;
    });
});

export default authReducer;
