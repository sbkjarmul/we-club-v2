import { createReducer } from "@reduxjs/toolkit";
import { actionTypes } from "./chat.action";

const initialState = {
  socket: null,
  userChats: [],
  userChatsError: null,
  isChatLoading: false,
  allUsers: [],
  activeChat: null,
  messages: [],
  notifications: [],
  messagesError: null,
  areMessagesLoading: false,
  onlineUsers: [],
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
    })
    .addCase(actionTypes.SEND_MESSAGE_SUCCESS, (state, action) => {
      state.messages = [...state.messages, action.payload];
    })
    .addCase(actionTypes.CONNECT_SOCKET_SUCCESS, (state, action) => {
      state.socket = action.payload;
    })
    .addCase(actionTypes.DISCONNECT_SOCKET_SUCCESS, (state) => {
      state.socket = null;
    })
    .addCase(actionTypes.SET_ONLINE_USERS, (state, action) => {
      state.onlineUsers = action.payload;
    })
    .addCase(actionTypes.ADD_MESSAGE, (state, action) => {
      state.messages = [...state.messages, action.payload];
    })
    .addCase(actionTypes.ADD_NOTIFICATION, (state, action) => {
      const newNotification = { ...action.payload };
      const isChatOpen = state?.activeChat?.members.some(
        (id) => id === newNotification.senderId
      );
      if (!isChatOpen) {
        state.notifications = [...state.notifications, newNotification];
      }
    })
    .addCase(actionTypes.DELETE_NOTIFICATIONS, (state, action) => {
      const chatId = action.payload;
      state.notifications = state.notifications.filter(
        (notification) => notification.chatId !== chatId
      );
    });
});

export default chatReducer;
