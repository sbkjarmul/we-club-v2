import PropTypes from "prop-types";
import { useFetchRecipient } from "../../hooks/useFetchRecipient";
import profileImage from "@/presentation/assets/images/profile-default.svg";

const UserChat = ({ chat, user }) => {
  // TODO: rebuild this to dummy component
  const { recipientUser } = useFetchRecipient(chat, user);
  console.log("chat");
  return (
    <div className="bg-blue-500 text-white p-1 border-bottom m-1">
      <div className="flex justify-between">
        <div className="flex">
          <div className="w-10 flex items-center mr-1">
            <img
              src={profileImage}
              alt="profile"
              className="p-1 rounded-full border border-black h-10 w-10"
            />
          </div>
          <div>
            <div className="rounded-full bg-green-500 h-3 w-3"></div>
            {/* <div>{recipientUser?.name}</div> */}
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

UserChat.propTypes = {
  chat: PropTypes.object,
  user: PropTypes.object,
};

export default UserChat;
