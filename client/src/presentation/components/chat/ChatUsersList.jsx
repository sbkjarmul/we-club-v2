import PropTypes from "prop-types";

const ChatUsersList = ({ users, createChat, isUserOnline }) => {
  return (
    <div>
      {users.map((user, index) => (
        <div
          key={index}
          className="inline"
          onClick={() => createChat(user._id)}
        >
          <div className="rounded-full border border-teal-500 w-16 inline-flex justify-center items-center">
            {user.name}
            {isUserOnline(user._id) && (
              <span className="rounded-full w-3 h-3 bg-green-500"></span>
            )}
          </div>
        </div>
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
