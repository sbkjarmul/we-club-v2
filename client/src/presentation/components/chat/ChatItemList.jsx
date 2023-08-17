import PropTypes from "prop-types";
import ChatItem from "@/presentation/components/chat/ChatItem";
import content from "@/presentation/assets/content";

const chatContent = content.pages.chat;

const ChatItemList = ({
  isChatsLoading,
  isUserOnline,
  setActiveChat,
  chats,
  currentUserId,
}) => {
  return (
    <>
      {isChatsLoading && <div>{chatContent.loadingChat}</div>}
      {chats.map((chat, index) => (
        <div key={index} onClick={() => setActiveChat(chat)}>
          <ChatItem
            chat={chat}
            currentUserId={currentUserId}
            isUserOnline={isUserOnline}
          />
        </div>
      ))}
    </>
  );
};

ChatItemList.propTypes = {
  isChatsLoading: PropTypes.bool,
  isUserOnline: PropTypes.func,
  setActiveChat: PropTypes.func,
  chats: PropTypes.array,
  currentUserId: PropTypes.string,
};

export default ChatItemList;
