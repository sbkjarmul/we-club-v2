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
  SET_ACTIVE_CHAT_SUCCESS: "SET_ACTIVE_CHAT_SUCCESS",
  SET_ACTIVE_CHAT_FAILURE: "SET_ACTIVE_CHAT_FAILURE",
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
export const setActiveChatSuccess = createActionWithPayload(
  actionTypes.SET_ACTIVE_CHAT_SUCCESS
);
export const setActiveChatFailure = createAction(
  actionTypes.SET_ACTIVE_CHAT_FAILURE
);
