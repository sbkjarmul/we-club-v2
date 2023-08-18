import PropTypes from "prop-types";
import ChatAvatar from "./ChatAvatar";

const ChatUser = ({ onClick = () => null, user, isOnline }) => {
  console.log("ChatUser: ", isOnline(user._id));
  return (
    <div className="flex " onClick={() => onClick(user._id)}>
      <ChatAvatar size={35} isOnline={isOnline(user._id)} />
      <div className="w-16 inline-flex text-blue-500 justify-center items-center">
        {user.name}
      </div>
    </div>
  );
};

ChatUser.propTypes = {
  user: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  isUserOnline: PropTypes.func,
  isOnline: PropTypes.func,
};

export default ChatUser;
