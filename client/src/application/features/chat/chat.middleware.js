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
  getMessagesSuccess,
  getMessagesFailure,
  disconnectSocketSuccess,
  connectSocketSuccess,
  sendMessageFailure,
  sendMessageSuccess,
  setMessagesLoader,
  setOnlineUsers,
} from "@/application/features/chat/chat.action";
import { createMiddleware } from "@/application/helpers";
import chatSocket from "@/infrastructure/sockets/chat.socket";

const getUserChats = createMiddleware(
  actionTypes.GET_USER_CHATS,
  async (action, dispatch) => {
    dispatch(setChatLoader(true));
    const response = await chatApi.getUserChats(action.payload);
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

const getMessages = createMiddleware(
  actionTypes.GET_MESSAGES,
  async (action, dispatch) => {
    dispatch(setMessagesLoader(true));
    const response = await chatApi.getMessages(action.payload);
    if (response.status === 200) {
      dispatch(getMessagesSuccess(response.data));
    } else {
      dispatch(getMessagesFailure());
    }
    dispatch(setMessagesLoader(false));
  }
);

const sendMessage = createMiddleware(
  actionTypes.SEND_MESSAGE,
  async (action, dispatch) => {
    dispatch(setMessagesLoader(true));
    const response = await chatApi.sendMessage(action.payload);
    if (response.status === 200) {
      dispatch(sendMessageSuccess(response.data));
    } else {
      dispatch(sendMessageFailure());
    }
    dispatch(setMessagesLoader(false));
  }
);

const connectSocket = createMiddleware(
  actionTypes.CONNECT_SOCKET,
  async (action, dispatch, state) => {
    const userId = state.auth.userInfo._id;
    chatSocket.connect();
    chatSocket.emit("connectUser", userId);
    chatSocket.on("getOnlineUsers", (users) => dispatch(setOnlineUsers(users)));
    dispatch(connectSocketSuccess(chatSocket));
  }
);

const disconnectSocket = createMiddleware(
  actionTypes.DISCONNECT_SOCKET,
  async (action, dispatch) => {
    chatSocket.off("getOnlineUsers");
    chatSocket.disconnect();
    dispatch(disconnectSocketSuccess());
  }
);

export default [
  getUserChats,
  getAllUsers,
  createChat,
  getMessages,
  sendMessage,
  connectSocket,
  disconnectSocket,
];
