export const selectUserChats = (state) => state.chat.userChats;
export const selectIsChatLoading = (state) => state.chat.isChatLoading;
export const selectAllUsers = (state) => state.chat.allUsers;
export const selectOtherUsers = (state) =>
  state.chat.allUsers.filter((user) => user._id !== state.auth.userInfo._id);
export const selectMessages = (state) => state.chat.messages;
export const selectActiveChat = (state) => state.chat.activeChat;
export const selectOnlineUsers = (state) => state.chat.onlineUsers;
export const selectIsSockedConnected = (state) => !!state.chat.socket;
