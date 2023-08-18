import { useDispatch, useSelector } from "react-redux";
import {
  selectNotifications,
  deleteNotifications,
} from "@/application/features/chat";

export const useNotifications = (chatId) => {
  const allNotifications = useSelector(selectNotifications);
  const dispatch = useDispatch();

  const thisChatNotifications = allNotifications.filter(
    (notification) => notification.chatId === chatId
  );

  const notificationsCount = thisChatNotifications.length;

  const lastMessage = thisChatNotifications[notificationsCount - 1]?.message;

  const clearNotifications = (chatId) => {
    dispatch(deleteNotifications(chatId));
  };

  return {
    notificationsCount,
    clearNotifications,
    lastMessage,
  };
};
