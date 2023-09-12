import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BaseLogo from "@/presentation/components/shared/BaseLogo";
import BaseButton from "@/presentation/components/shared/BaseButton";
import content from "@/presentation/assets/content.json";
import HeaderUserInfo from "./HeaderUserInfo";
import Dropdown from "@/presentation/components/shared/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import ChatItemList from "@/presentation/components/chat/ChatItemList";
import { useUser } from "@/presentation/hooks/useUser";
import { useChat } from "@/presentation/hooks/useChat";

const headerContent = content.components.header;

const Header = () => {
  const { isUserOnline, currentUser: userInfo, logout } = useUser();
  const { userChats, isChatsLoading, openChat } = useChat();

  return (
    <header className="p-3 flex justify-between items-center">
      <Link to="/">
        <BaseLogo size={50} />
      </Link>

      {userInfo && (
        <div className="flex">
          <Dropdown
            button={
              <BaseButton isBorderless className="mx-8">
                <FontAwesomeIcon icon={faComment} size="xl" />
              </BaseButton>
            }
            dropdown={
              <div className="p-3">
                <ChatItemList
                  currentUserId={userInfo.id}
                  chats={userChats}
                  isUserOnline={isUserOnline}
                  isChatsLoading={isChatsLoading}
                  openChat={openChat}
                />
              </div>
            }
          />

          <HeaderUserInfo userInfo={userInfo} logout={logout} />
        </div>
      )}

      {!userInfo && (
        <div>
          <BaseButton isBorderless>
            <Link to="/login">{headerContent.login}</Link>
          </BaseButton>

          <BaseButton isOutlined>
            <Link to="/register">{headerContent.register}</Link>
          </BaseButton>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  userInfo: PropTypes.object,
};

export default Header;
