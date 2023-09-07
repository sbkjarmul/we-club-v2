import PropTypes from "prop-types";
import ChatUser from "./ChatUser";

const ChatUsersList = ({ users, createChat, isUserOnline }) => {
  return (
    <div>
      {users.map((user) => (
        <ChatUser
          user={user}
          key={user.id}
          isOnline={isUserOnline}
          onClick={createChat}
        />
      ))}
    </div>
  );
};

ChatUsersList.propTypes = {
  users: PropTypes.array.isRequired,
  createChat: PropTypes.func.isRequired,
  isUserOnline: PropTypes.func.isRequired,
};

export default ChatUsersList;
