import { createSelector } from "@reduxjs/toolkit";

const selectChat = (state) => state.chat;
const selectAuth = (state) => state.auth;

export const selectUserChats = createSelector(
  selectChat,
  (chat) => chat.userChats
);
export const selectIsChatLoading = createSelector(
  selectChat,
  (chat) => chat.isChatLoading
);
export const selectAllUsers = createSelector(
  selectChat,
  (chat) => chat.allUsers
);
export const selectOtherUsers = createSelector(
  [selectChat, selectAuth],
  (chat, auth) => chat.allUsers.filter((user) => user._id !== auth.userInfo._id)
);
export const selectMessages = createSelector(
  selectChat,
  (chat) => chat.messages
);
export const selectActiveChat = createSelector(
  selectChat,
  (chat) => chat.activeChat
);
export const selectOnlineUsers = createSelector(
  selectChat,
  (chat) => chat.onlineUsers
);
