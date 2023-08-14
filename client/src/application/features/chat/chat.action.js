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
