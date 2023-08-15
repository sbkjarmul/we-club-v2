import PropTypes from "prop-types";
import { useFetchRecipient } from "@/presentation/hooks/useFetchRecipient";
import content from "@/presentation/assets/content.json";
import ChatAvatar from "./ChatAvatar";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const chatContent = content.pages.chat;

const ChatBox = ({ messages, user, chat, loading, sendMessage }) => {
  const { recipientUser } = useFetchRecipient(chat, user);

  if (!recipientUser) {
    return (
      <div className="border border-black m-1 h-96">
        <p>{chatContent.noConversationSelected}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="border border-black m-1 h-96">
        <p>{chatContent.loadingChat}</p>
      </div>
    );
  }

  return (
    <div className="relative h-full bg-blue-900">
      <div className="absolute z-10 t-0 l-0 w-full bg-blue-900 flex justify-start items-center font-light pl-1 py-1 mb-3">
        <ChatAvatar size={25} />
        <span className="text-white text-xs ml-2">
          {recipientUser?.name || "Recipient Name"}
        </span>
      </div>

      <div className="overflow-y-auto h-96 rotate-180" dir="rtl">
        <div className="p-3 flex w-full flex-col-reverse h-auto justify-end">
          {messages &&
            messages.map((message, index) => (
              <ChatMessage message={message} key={index} userId={user._id} />
            ))}
        </div>
      </div>
      <div className="m-3">
        <ChatInput placeholder="Aa" onEnter={(value) => sendMessage(value)} />
      </div>
    </div>
  );
};

ChatBox.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      createdAt: PropTypes.string,
      senderId: PropTypes.string,
    })
  ),
  user: PropTypes.object,
  chat: PropTypes.object,
  loading: PropTypes.bool,
  sendMessage: PropTypes.func,
};

export default ChatBox;
