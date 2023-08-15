import PropTypes from "prop-types";
import defaultAvatar from "@/presentation/assets/images/profile-default.svg";

const ChatAvatar = ({ imageUrl = defaultAvatar, size = 50 }) => {
  return (
    <div className={`flex items-center justify-center`}>
      <img src={imageUrl} alt="profile" width={size} />
    </div>
  );
};

export default ChatAvatar;

ChatAvatar.propTypes = {
  imageUrl: PropTypes.string,
  size: PropTypes.number,
};
