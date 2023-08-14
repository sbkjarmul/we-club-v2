import { chatApi, userApi } from "@/infrastructure/api";
import {
  actionTypes,
  setChatLoader,
  getUserChatsSuccess,
  getUserChatsFailure,
  getAllUsersSuccess,
  getAllUsersFailure,
  createChatFailure,
  createChatSuccess,
} from "@/application/features/chat/chat.action";
import { createMiddleware } from "@/application/helpers";

const getUserChats = createMiddleware(
  actionTypes.GET_USER_CHATS,
  async (action, dispatch) => {
    dispatch(setChatLoader(true));
    const response = await chatApi.getUserChats(action.payload);
    console.log(response);
    if (response.status === 200) {
      dispatch(getUserChatsSuccess(response.data));
    } else {
      dispatch(getUserChatsFailure());
    }
    dispatch(setChatLoader(false));
  }
);

const getAllUsers = createMiddleware(
  actionTypes.GET_ALL_USERS,
  async (action, dispatch) => {
    dispatch(setChatLoader(true));
    const response = await userApi.getAllUsers();
    if (response.status === 200) {
      dispatch(getAllUsersSuccess(response.data));
    } else {
      dispatch(getAllUsersFailure());
    }
    dispatch(setChatLoader(false));
  }
);

const createChat = createMiddleware(
  actionTypes.CREATE_CHAT,
  async (action, dispatch) => {
    dispatch(setChatLoader(true));
    const response = await chatApi.createChat(action.payload);
    if (response.status === 200) {
      dispatch(createChatSuccess(response.data));
    } else {
      dispatch(createChatFailure());
    }
    dispatch(setChatLoader(false));
  }
);

export default [getUserChats, getAllUsers, createChat];
