import { createAction } from "@reduxjs/toolkit";

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
};

export const setChatLoader = createAction(
  actionTypes.SET_CHAT_LOADER,
  (data) => ({
    payload: data,
  })
);
export const getUserChats = createAction(actionTypes.GET_USER_CHATS);
export const getUserChatsSuccess = createAction(
  actionTypes.GET_USER_CHATS_SUCCESS,
  (data) => ({
    payload: data,
  })
);
export const getUserChatsFailure = createAction(
  actionTypes.GET_USER_CHATS_FAILURE
);
export const getAllUsers = createAction(actionTypes.GET_ALL_USERS);
export const getAllUsersSuccess = createAction(
  actionTypes.GET_ALL_USERS_SUCCESS,
  (data) => ({
    payload: data,
  })
);
export const getAllUsersFailure = createAction(
  actionTypes.GET_ALL_USERS_FAILURE
);
export const createChat = createAction(actionTypes.CREATE_CHAT, (data) => ({
  payload: data,
}));
export const createChatSuccess = createAction(
  actionTypes.CREATE_CHAT_SUCCESS,
  (data) => ({
    payload: data,
  })
);
export const createChatFailure = createAction(actionTypes.CREATE_CHAT_FAILURE);
