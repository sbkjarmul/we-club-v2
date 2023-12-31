import PropTypes from "prop-types";
import ChatItem from "@/presentation/components/chat/ChatItem";
import content from "@/presentation/assets/content";

const chatContent = content.pages.chat;

const ChatItemList = ({
  isChatsLoading,
  isUserOnline,
  openChat,
  chats,
  currentUserId,
}) => {
  return (
    <div className="flex flex-col">
      {isChatsLoading && <div>{chatContent.loadingChat}</div>}
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          currentUserId={currentUserId}
          isUserOnline={isUserOnline}
          openChat={openChat}
        />
      ))}
    </div>
  );
};

ChatItemList.propTypes = {
  isChatsLoading: PropTypes.bool,
  isUserOnline: PropTypes.func,
  openChat: PropTypes.func,
  chats: PropTypes.array,
  currentUserId: PropTypes.string,
};

export default ChatItemList;
