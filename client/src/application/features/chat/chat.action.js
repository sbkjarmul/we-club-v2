import { createAction } from "@reduxjs/toolkit";
import { createActionWithPayload } from "@/application/helpers";

export const actionTypes = {
  GET_USER_CHATS: "GET_USER_CHATS",
  GET_USER_CHATS_SUCCESS: "GET_USER_CHATS_SUCCESS",
  GET_USER_CHATS_FAILURE: "GET_USER_CHATS_FAILURE",
  SET_CHAT_LOADER: "SET_CHAT_LOADER",
  GET_ALL_USERS: "GET_ALL_USERS",
  GET_ALL_USERS_SUCCESS: "GET_ALL_USERS_SUCCESS",
  GET_ALL_USERS_FAILURE: "GET_ALL_USERS_FAILURE",
  CREATE_CHAT: "CREATE_CHAT",
  CREATE_CHAT_SUCCESS: "CREATE_CHAT_SUCCESS",
  CREATE_CHAT_FAILURE: "CREATE_CHAT_FAILURE",
  SET_ACTIVE_CHAT: "SET_ACTIVE_CHAT",
  GET_MESSAGES: "GET_MESSAGES",
  GET_MESSAGES_SUCCESS: "GET_MESSAGES_SUCCESS",
  GET_MESSAGES_FAILURE: "GET_MESSAGES_FAILURE",
  SET_MESSAGES_LOADER: "SET_MESSAGES_LOADER",
  SEND_MESSAGE: "SEND_MESSAGE",
  SEND_MESSAGE_SUCCESS: "SEND_MESSAGE_SUCCESS",
  SEND_MESSAGE_FAILURE: "SEND_MESSAGE_FAILURE",
  // SOCKET
  CONNECT_SOCKET: "CONNECT_SOCKET",
  CONNECT_SOCKET_SUCCESS: "CONNECT_SOCKET_SUCCESS",
  DISCONNECT_SOCKET: "DISCONNECT_SOCKET",
  DISCONNECT_SOCKET_SUCCESS: "DISCONNECT_SOCKET_SUCCESS",
  LOGIN_TO_CHAT: "LOGIN_TO_CHAT",
  SET_ONLINE_USERS: "SET_ONLINE_USERS",
  ADD_MESSAGE: "ADD_MESSAGE",
  ADD_NOTIFICATION: "ADD_NOTIFICATION",
  DELETE_NOTIFICATIONS: "DELETE_NOTIFICATIONS",
};

export const setChatLoader = createActionWithPayload(
  actionTypes.SET_CHAT_LOADER
);
export const getUserChats = createAction(actionTypes.GET_USER_CHATS);
export const getUserChatsSuccess = createActionWithPayload(
  actionTypes.GET_USER_CHATS_SUCCESS
);
export const getUserChatsFailure = createAction(
  actionTypes.GET_USER_CHATS_FAILURE
);
export const getAllUsers = createAction(actionTypes.GET_ALL_USERS);
export const getAllUsersSuccess = createActionWithPayload(
  actionTypes.GET_ALL_USERS_SUCCESS
);
export const getAllUsersFailure = createAction(
  actionTypes.GET_ALL_USERS_FAILURE
);
export const createChat = createActionWithPayload(actionTypes.CREATE_CHAT);
export const createChatSuccess = createActionWithPayload(
  actionTypes.CREATE_CHAT_SUCCESS
);
export const createChatFailure = createAction(actionTypes.CREATE_CHAT_FAILURE);
export const setActiveChat = createActionWithPayload(
  actionTypes.SET_ACTIVE_CHAT
);
export const getMessages = createAction(actionTypes.GET_MESSAGES);
export const getMessagesSuccess = createActionWithPayload(
  actionTypes.GET_MESSAGES_SUCCESS
);
export const getMessagesFailure = createAction(
  actionTypes.GET_MESSAGES_FAILURE
);
export const setMessagesLoader = createActionWithPayload(
  actionTypes.SET_MESSAGES_LOADER
);
export const sendMessage = createActionWithPayload(actionTypes.SEND_MESSAGE);
export const sendMessageSuccess = createActionWithPayload(
  actionTypes.SEND_MESSAGE_SUCCESS
);
export const sendMessageFailure = createAction(
  actionTypes.SEND_MESSAGE_FAILURE
);
// SOCKET
export const connectSocket = createAction(actionTypes.CONNECT_SOCKET);
export const connectSocketSuccess = createAction(
  actionTypes.CONNECT_SOCKET_SUCCESS
);
export const disconnectSocket = createAction(actionTypes.DISCONNECT_SOCKET);
export const disconnectSocketSuccess = createAction(
  actionTypes.DISCONNECT_SOCKET_SUCCESS
);
export const loginToChat = createActionWithPayload(actionTypes.LOGIN_TO_CHAT);
export const setOnlineUsers = createActionWithPayload(
  actionTypes.SET_ONLINE_USERS
);
export const addMessage = createActionWithPayload(actionTypes.ADD_MESSAGE);
export const addNotification = createActionWithPayload(
  actionTypes.ADD_NOTIFICATION
);
export const deleteNotifications = createActionWithPayload(
  actionTypes.DELETE_NOTIFICATIONS
);
