import PropTypes from "prop-types";
import ChatAvatar from "./ChatAvatar";
import { getHour } from "@/presentation/utils/";

const ChatMessage = ({ message, currentUserId }) => {
  const isUserSender = message.senderId === currentUserId;

  return (
    <div
      className={`rotate-180 flex items-end ${
        isUserSender ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <ChatAvatar size={35} />
      <div
        className={`flex flex-col text-sm bg-blue-500 rounded-2xl text-white self-end h-auto w-fit max-w-3/4 p-2 mx-1 mb-0.5
      ${
        isUserSender
          ? "self-end bg-slate-500 rounded-tr-none"
          : "self-start rounded-tl-none"
      }
      `}
        dir={isUserSender ? "lrt" : "rtl"}
      >
        <span className="text-xs break-words antialiased tracking-wide">
          {message.text}
        </span>
        <span className="block text-3xs text-end text-slate-200 antialiased">
          {getHour(message.createdAt)}
        </span>
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.object.isRequired,
  currentUserId: PropTypes.string.isRequired,
};

export default ChatMessage;
