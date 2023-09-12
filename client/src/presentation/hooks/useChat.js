import { useDispatch, useSelector } from "react-redux";
import {
  selectUserChats,
  selectIsChatLoading,
  setActiveChat,
  getMessages,
} from "@/application/features/chat";

export const useChat = () => {
  const dispatch = useDispatch();
  const userChats = useSelector(selectUserChats);
  const isChatsLoading = useSelector(selectIsChatLoading);

  const openChat = (chat) => {
    dispatch(setActiveChat(chat));
    dispatch(getMessages(chat.id));
  };

  return { userChats, isChatsLoading, openChat };
};
