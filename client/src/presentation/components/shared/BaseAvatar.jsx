import PropTypes from "prop-types";
import defaultAvatar from "@/presentation/assets/images/profile-default.svg";

const BaseAvatar = ({ imageUrl = defaultAvatar, size = 50, isOnline }) => {
  return (
    <div
      className={`flex items-center justify-center border rounded ${
        isOnline ? "border-green-500" : "border-gray-500 "
      }`}
    >
      <img src={imageUrl} alt="profile" width={size} />
    </div>
  );
};

export default BaseAvatar;

BaseAvatar.propTypes = {
  imageUrl: PropTypes.string,
  size: PropTypes.number,
  isOnline: PropTypes.bool,
};
