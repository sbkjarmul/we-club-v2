import { createReducer } from "@reduxjs/toolkit";
import { actionTypes } from "./chat.action";

const initialState = {
  userChats: [],
  userChatsError: null,
  isChatLoading: false,
  allUsers: [],
  activeChat: [],
  messages: [],
  messagesError: null,
  areMessagesLoading: false,
};

const chatReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionTypes.SET_CHAT_LOADER, (state, action) => {
      state.isChatLoading = action.payload;
    })
    .addCase(actionTypes.SET_MESSAGES_LOADER, (state, action) => {
      state.areMessagesLoading = action.payload;
    })
    .addCase(actionTypes.GET_USER_CHATS_SUCCESS, (state, action) => {
      state.userChats = action.payload;
    })
    .addCase(actionTypes.GET_ALL_USERS_SUCCESS, (state, action) => {
      state.allUsers = action.payload;
    })
    .addCase(actionTypes.CREATE_CHAT_SUCCESS, (state, action) => {
      state.userChats = [...state.userChats, action.payload];
    })
    .addCase(actionTypes.SET_ACTIVE_CHAT, (state, action) => {
      state.activeChat = action.payload;
    })
    .addCase(actionTypes.GET_MESSAGES_SUCCESS, (state, action) => {
      state.messages = action.payload;
    });
});

export default chatReducer;
