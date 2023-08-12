import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isLoading: false,
    userInfo: null,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
