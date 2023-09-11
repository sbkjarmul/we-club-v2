import PropTypes from "prop-types";
import { useRecipient } from "@/presentation/hooks/useRecipient";
import ChatAvatar from "./ChatAvatar";
import { useNotifications } from "../../hooks/useNotifications";
import { getHour } from "@/presentation/utils/";

// TODO: rebuild dummy component
const ChatItem = ({ chat, currentUserId, isUserOnline, openChat }) => {
  const { recipientUser } = useRecipient(chat, currentUserId);
  const { notificationsCount, clearNotifications, lastMessage } =
    useNotifications(chat.id);

  const handleOnClick = () => {
    openChat(chat);
    clearNotifications(chat.id);
  };

  console.log("ChatItem render");
  return (
    <div
      className="text-white p-1 border-b border-blue-500 m-1 cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex items-center mr-1">
            <ChatAvatar size={30} isOnline={isUserOnline(recipientUser?.id)} />
          </div>
          <div>
            <div>{recipientUser?.name}</div>
            <div className="text-xs w-24 truncate ...">{lastMessage}</div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="text-2xs">{getHour(lastMessage?.createdAt)}</div>
          <div className="text-cyan-500 text-2xs">{notificationsCount}</div>
        </div>
      </div>
    </div>
  );
};

ChatItem.propTypes = {
  chat: PropTypes.object,
  currentUserId: PropTypes.string,
  isUserOnline: PropTypes.func,
  openChat: PropTypes.func,
};

export default ChatItem;
