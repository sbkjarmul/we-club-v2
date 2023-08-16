import moment from "moment";
import PropTypes from "prop-types";
import ChatAvatar from "./ChatAvatar";

const ChatMessage = ({ message, userId }) => {
  const isUserSender = message.senderId === userId;

  const getHour = (date) => moment(date).format("HH:mm");

  return (
    <div
      className={`rotate-180 flex items-end ${
        isUserSender ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <ChatAvatar size={35} />
      <div
        className={`flex flex-col text-sm bg-slate-500 rounded-2xl text-white self-end h-auto w-fit max-w-3/4 p-2 mx-1 mb-0.5
      ${
        isUserSender
          ? "self-end bg-slate-400 rounded-tr-none"
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

// write prop types
ChatMessage.propTypes = {
  message: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
};

export default ChatMessage;
