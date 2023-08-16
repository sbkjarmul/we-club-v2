import PropTypes from "prop-types";
import { useFetchRecipient } from "@/presentation/hooks/useFetchRecipient";
import ChatAvatar from "./ChatAvatar";

const ChatItem = ({ chat, user }) => {
  // TODO: rebuild this to dummy component
  const { recipientUser } = useFetchRecipient(chat, user);
  console.log("ChatItem render");
  return (
    <div className="bg-blue-500 text-white p-1 border-bottom m-1">
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex items-center mr-1">
            <ChatAvatar />
          </div>
          <div>
            <div className="rounded-full bg-green-500 h-3 w-3"></div>
            <div>{recipientUser?.name}</div>
            <div className="text-xs">Text message</div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div>12/12/2012</div>
          <div className="rounded-full bg-blue-300 px-2 w-6">2</div>
        </div>
      </div>
    </div>
  );
};

ChatItem.propTypes = {
  chat: PropTypes.object,
  user: PropTypes.object,
};

export default ChatItem;
