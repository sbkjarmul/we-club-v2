import { createReducer } from "@reduxjs/toolkit";
import { actionTypes } from "./chat.action";

const initialState = {
  userChats: [],
  allUsers: [],
  isChatLoading: false,
  userChatsError: null,
};

const chatReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionTypes.SET_CHAT_LOADER, (state, action) => {
      state.isChatLoading = action.payload;
    })
    .addCase(actionTypes.GET_USER_CHATS_SUCCESS, (state, action) => {
      state.userChats = action.payload;
    })
    .addCase(actionTypes.GET_ALL_USERS_SUCCESS, (state, action) => {
      state.allUsers = action.payload;
    })
    .addCase(actionTypes.CREATE_CHAT_SUCCESS, (state, action) => {
      state.userChats = [...state.userChats, action.payload];
    });
});

export default chatReducer;
