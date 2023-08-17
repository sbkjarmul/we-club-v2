import PropTypes from "prop-types";
import { useRecipient } from "@/presentation/hooks/useRecipient";
import ChatAvatar from "./ChatAvatar";

// TODO: rebuild dummy component
const ChatItem = ({ chat, currentUserId, isUserOnline }) => {
  const { recipientUser } = useRecipient(chat, currentUserId);
  console.log("ChatItem render");
  return (
    <div className="bg-blue-500 text-white p-1 border-bottom m-1">
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex items-center mr-1">
            <ChatAvatar />
          </div>
          <div>
            {isUserOnline(recipientUser?._id) && (
              <div className="inline-block rounded-full bg-green-500 h-3 w-3" />
            )}
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
  currentUserId: PropTypes.string,
  isUserOnline: PropTypes.func,
};

export default ChatItem;
