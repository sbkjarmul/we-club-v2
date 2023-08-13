import { createReducer } from "@reduxjs/toolkit";
import { actionTypes } from "./auth.action";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  userInfo: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionTypes.REGISTER_USER, (state) => {
      state.isLoading = true;
    })
    .addCase(actionTypes.REGISTER_USER_SUCCESS, (state) => {
      state.isLoading = false;
    })
    .addCase(actionTypes.REGISTER_USER_FAILURE, (state) => {
      state.isLoading = false;
    });
});

export default authReducer;
